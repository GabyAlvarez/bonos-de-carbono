import React, { useState, useEffect } from 'react'

// librerias
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataMexico from "../../data/mx-all";
import dataEdosMexico from "../../data/data-mapa";
import { ModalCard } from '../modal/ModalCard';
import ReactLoading from 'react-loading';

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

export const MapaMex = () => {
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
    const [estado, setEstado] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const  [proyecto,setProyectos]= useState([]);
 
    async function getData(){
        const res = await fetch("https://www.toroto.mx/api/projects");
        res.json()
        .then(res => {
            setProyectos(res)
        })
            
        .catch(err => console.log(err));
    }

    useEffect(()=>{
       if(load) {
            getData();
            setLoad(false)
       }
    },[]);

    const mapOptions = {
        chart: {
            height: 600,
            events: {
                  /*load: function() {
                    let temporal = this.series[0].data 
                    console.log(temporal)
                 }
                 temporal.map(estado => {
                        if (estado['value'] > 0) { // tiene bonos de carbono
                            estado.color = 'rgba(25,48,219,0.7)';
                        return estado;
                        }

                        return estado
                    })
                    this.series[0].data = temporal
                    
                    this.update({
                        series: [{
                            data: this.series[0].data
                         }]
                    }) 
                }*/
            }
        },
        plotOptions: {
            //Segun la doc se incluye este apartado para funcionalidad despues del render
            series: {
                events: {
                    click: function (e) {
                        let estadoJson = e.point.properties;
                        let idEstadoFederal = estadoJson["hc-key"];
                        /* if (['mx-oa', 'mx-hg','mx-cs'].includes(idEstadoFederal)) { */
                        if (e.point.value > 0) {
                            let proyectSelect = null

                            switch(idEstadoFederal) {
                                case "mx-cs": {
                                    proyectSelect = proyecto.filter( data => data.location === 'Chiapas, MEX')[0]
                                    break
                                }
                                case "mx-hg": {
                                    proyectSelect = proyecto.filter( data => data.location === 'Hidalgo, MEX')[0]
                                    break
                                }
                                case "mx-oa" : {
                                    proyectSelect = proyecto.filter( data => data.location === 'Oaxaca, MEX')[0]
                                    break
                                }
                            }
                            setEstado(proyectSelect)
                            handleShow()
                        }
                        
                    }
                },
            }
        },
        title: {
            text: "Conoce nuestros proyectos.",
        },
        series: [
            {
            mapData: mapDataMexico,
            name: "Bonos de carbono",
            color:   'rgba(14,217,86,0.5)',
            borderColor: "#FFF",
            states: {
                hover: {
                    // color: 'rgba(186,24,99,0.5)'
                    color: 'rgba(25,48,219,0.5)'
                }
            },
            data: dataEdosMexico,
            },
        ],
        };

    return (
        <div>
            {
                !load && 
                < HighchartsReact
                    options={mapOptions}
                    constructorType={'mapChart'}
                    highcharts={Highcharts}
                />
            }
            {
                load &&  <ReactLoading height={'20%'} width={'20%'} color={'blue'}></ReactLoading>
            }
            <ModalCard
                handleClose = {handleClose}
                show = {show}
                estado = {estado}
             ></ModalCard>
             
        </div>
    )
}

