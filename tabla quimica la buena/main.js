const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const elementSymbol = document.getElementById("element-symbol");
const elementName = document.getElementById("element-name");
const atomicNumber = document.getElementById("atomic-number");
const atomicWeight = document.getElementById("atomic-weight");
const valence = document.getElementById("valence");
const numeroAtomico = document.getElementById("numeroatomico");
const estado = document.getElementById("estado");
const categoria = document.getElementById("categoria");
const configuracionElectronica = document.getElementById("configuracionelectronica");
const cargaAtomica = document.getElementById("cargaatomica");


function getElementInfo(symbol) {
    // Fuente de datos con información de algunos elementos
    const elementInfo = {
        H: {
            PesoAtomico: "1.008",
            valencia: "1",
            numeroAtomico: "1",
            estado: "Gas",
            categoria: "No metal",
            configuracionElectronica: "1s1",
            cargaAtomica:"+1"
        },
        He: {
            PesoAtomico: "4.0026",
            valencia: "0",
            numeroAtomico: "2",
            estado: "Gas",
            categoria: "Gas noble",
            configuracionElectronica: "1s2",
            cargaAtomica:"0"
        },
        Li: {
            PesoAtomico: "6.94",
            valencia: "1",
            numeroAtomico: "3",
            estado: "Sólido",
            categoria: "Metal alcalino",
            configuracionElectronica: "1s2 2s1",
            cargaAtomica:"+1"
            },
            
            Be: {
            PesoAtomico: "9.0122",
            valencia: "2",
            numeroAtomico: "4",
            estado: "Sólido",
            categoria: "Metal alcalinotérreo",
            configuracionElectronica: "1s2 2s2",
            cargaAtomica:"+2"
            },
            
            B: {
            PesoAtomico: "10.81",
            valencia: "3",
            numeroAtomico: "5",
            estado: "Sólido",
            categoria: "Metal metaloide",
            configuracionElectronica: "1s2 2s2 2p1",
            cargaAtomica:"+3"
            },
            
            C: {
            PesoAtomico: "12.01",
            valencia: "4",
            numeroAtomico: "6",
            estado: "Sólido",
            categoria: "No metal",
            configuracionElectronica: "1s2 2s2 2p2",
            cargaAtomica:"0"
            },
            
            N: {
            PesoAtomico: "14.01",
            valencia: "3, 5",
            numeroAtomico: "7",
            estado: "Gas",
            categoria: "No metal",
            configuracionElectronica: "1s2 2s2 2p3",
            cargaAtomica:"-3"
            },
            
            O: {
            PesoAtomico: "16.00",
            valencia: "2",
            numeroAtomico: "8",
            estado: "Gas",
            categoria: "No metal",
            configuracionElectronica: "1s2 2s2 2p4",
            cargaAtomica:" -2"
            },
            
            F: {
            PesoAtomico: "19.00",
            valencia: "1",
            numeroAtomico: "9",
            estado: "Gas",
            categoria: "Halógeno",
            configuracionElectronica: "1s2 2s2 2p5",
            cargaAtomica:"-1"
            },
            
            Ne: {
            PesoAtomico: "20.18",
            valencia: "0",
            numeroAtomico: "10",
            estado: "Gas",
            categoria: "Gas noble",
            configuracionElectronica: "1s2 2s2 2p6",
            cargaAtomica:"0"
            },
            Na: {
                PesoAtomico: "22.99",
                valencia: "1",
                numeroAtomico: "11",
                estado: "Sólido",
                categoria: "Metal alcalino",
                configuracionElectronica: "1s2 2s2 2p6 3s1",
                cargaAtomica:"+1"
                },
                
                 Mg: {
                PesoAtomico: "24.31",
                valencia: "2",
                numeroAtomico: "12",
                estado: "Sólido",
                categoria: "Metal alcalinotérreo",
                configuracionElectronica: "1s2 2s2 2p6 3s2",
                cargaAtomica:"+2"
                },
                
                Al: {
                PesoAtomico: "26.98",
                valencia: "3",
                numeroAtomico: "13",
                estado: "Sólido",
                categoria: "Metal",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p1",
                cargaAtomica:"+3"
                },
                
                Si: {
                PesoAtomico: "28.09",
                valencia: "4",
                numeroAtomico: "14",
                estado: "Sólido",
                categoria: "Metal metaloide",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p2",
                cargaAtomica:"+4"
                },
                
                P: {
                PesoAtomico: "30.97",
                valencia: "3, 5",
                numeroAtomico: "15",
                estado: "Sólido",
                categoria: "No metal",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p3",
                cargaAtomica:"-3"
                },
                
                S: {
                PesoAtomico: "32.06",
                valencia: "2, 4, 6",
                numeroAtomico: "16",
                estado: "Sólido",
                categoria: "No metal",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p4",
                cargaAtomica:"-2"
                },
                
                Cl: {
                PesoAtomico: "35.45",
                valencia: "1, 3, 5, 7",
                numeroAtomico: "17",
                estado: "Gas",
                categoria: "Halógeno",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p5",
                cargaAtomica:"-1"
                },
                
                Ar: {
                PesoAtomico: "39.95",
                valencia: "0",
                numeroAtomico: "18",
                estado: "Gas",
                categoria: "Gas noble",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6",
                cargaAtomica:"0"
                },
                
                K: {
                PesoAtomico: "39.10",
                valencia: "1",
                numeroAtomico: "19",
                estado: "Sólido",
                categoria: "Metal alcalino",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s1",
                cargaAtomica:"+1"
                },
                
                Ca: {
                PesoAtomico: "40.08",
                valencia: "2",
                numeroAtomico: "20",
                estado: "Sólido",
                categoria: "Metal alcalinotérreo",
                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2",
                cargaAtomica:"+2"
                },

                Sc: {
                    PesoAtomico: "44.96",
                    valencia: "3",
                    numeroAtomico: "21",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
                    cargaAtomica:"+3"
                    },
                    
                    Ti: {
                    PesoAtomico: "47.87",
                    valencia: "2, 3, 4",
                    numeroAtomico: "22",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
                    cargaAtomica:"generalmente +4,varia entre -2 y +5"
                    },
                    
                    V: {
                    PesoAtomico: "50.94",
                    valencia: "2, 3, 4, 5",
                    numeroAtomico: "23",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
                    cargaAtomica:"generalmente +3, varia entre -1 y +5"
                    },
                    
                    Cr: {
                    PesoAtomico: "52.00",
                    valencia: "2, 3, 6",
                    numeroAtomico: "24",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
                    cargaAtomica:"generalmente +3,varia entre -2 y +6"
                    },
                    
                    Mn: {
                    PesoAtomico: "54.94",
                    valencia: "2, 4, 7",
                    numeroAtomico: "25",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
                    cargaAtomica:"+2"
                    },
                    
                    Fe: {
                    PesoAtomico: "55.85",
                    valencia: "2, 3",
                    numeroAtomico: "26",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
                    cargaAtomica:"generalmente +2 y +3"
                    },
                    
                    Co: {
                    PesoAtomico: "58.93",
                    valencia: "2, 3",
                    numeroAtomico: "27",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
                    cargaAtomica:"+2"
                    },
                    
                    Ni: {
                    PesoAtomico: "58.69",
                    valencia: "2, 3",
                    numeroAtomico: "28",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
                    cargaAtomica:"+2"
                    },
                    
                    Cu: {
                    PesoAtomico: "63.55",
                    valencia: "1, 2",
                    numeroAtomico: "29",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
                    cargaAtomica:"generalmente +1 y +2"
                    },
                    
                    Zn: {
                    PesoAtomico: "65.38",
                    valencia: "2",
                    numeroAtomico: "30",
                    estado: "Sólido",
                    categoria: "Metal de transición",
                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
                    cargaAtomica:"+2"
                    },

                    Ga: {
                        PesoAtomico: "69.72",
                        valencia: "1, 3",
                        numeroAtomico: "31",
                        estado: "Sólido",
                        categoria: "Metal",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
                        cargaAtomica:"+3"
                        },
                        
                        Ge: {
                        PesoAtomico: "72.63",
                        valencia: "2, 4",
                        numeroAtomico: "32",
                        estado: "Sólido",
                        categoria: "Metal metaloide",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
                        cargaAtomica:"generalmente +4, varia entre -4 y +4"
                        },
                        
                        As: {
                        PesoAtomico: "74.92",
                        valencia: "3, 5",
                        numeroAtomico: "33",
                        estado: "Sólido",
                        categoria: "Metal metaloide",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
                        cargaAtomica:"generalmente -3, varia entre -3 y +5"
                        },
                        
                        Se: {
                        PesoAtomico: "78.96",
                        valencia: "2, 4, 6",
                        numeroAtomico: "34",
                        estado: "Sólido",
                        categoria: "No metal",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
                        cargaAtomica:"-2"
                        },
                        
                        Br: {
                        PesoAtomico: "79.90",
                        valencia: "1, 3, 5, 7",
                        numeroAtomico: "35",
                        estado: "Líquido",
                        categoria: "Halógeno",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
                        cargaAtomica:"generalmente -1, varia entre -1 y +7"
                        },
                        
                        Kr: {
                        PesoAtomico: "83.80",
                        valencia: "0",
                        numeroAtomico: "36",
                        estado: "Gas",
                        categoria: "Gas noble",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
                        cargaAtomica:"0"
                        },
                        
                        Rb: {
                        PesoAtomico: "85.47",
                        valencia: "1",
                        numeroAtomico: "37",
                        estado: "Sólido",
                        categoria: "Metal alcalino",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
                        cargaAtomica:"+1"
                        },
                        
                        Sr: {
                        PesoAtomico: "87.62",
                        valencia: "2",
                        numeroAtomico: "38",
                        estado: "Sólido",
                        categoria: "Metal alcalinotérreo",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
                        cargaAtomica:"+2"
                        },
                        
                         Y: {
                        PesoAtomico: "88.91",
                        valencia: "3",
                        numeroAtomico: "39",
                        estado: "Sólido",
                        categoria: "Metal de transición",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
                        cargaAtomica:"+3"
                        },
                        
                        Zr: {
                        PesoAtomico: "91.22",
                        valencia: "4",
                        numeroAtomico: "40",
                        estado: "Sólido",
                        categoria: "Metal de transición",
                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
                        cargaAtomica:"+4"
                        },

                        Nb: {
                            PesoAtomico: "92.91",
                            valencia: "5",
                            numeroAtomico: "41",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
                            cargaAtomica:"generalmente +5, varia entre -1 y +5"
                            },
                            
                            Mo: {
                            PesoAtomico: "95.94",
                            valencia: "2, 4, 6",
                            numeroAtomico: "42",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
                            cargaAtomica:"generalmente +6, varia entre -2 y +6"
                            },
                            
                            Tc: {
                            PesoAtomico: "98.00",
                            valencia: "7",
                            numeroAtomico: "43",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
                            cargaAtomica:"generalmente +7, varia entre -3 y +7"
                            },
                            
                            Ru: {
                            PesoAtomico: "101.1",
                            valencia: "3, 4, 6, 8",
                            numeroAtomico: "44",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
                            cargaAtomica:"generalmente +3, varia entre -2 y +8"
                            },
                            
                            Rh: {
                            PesoAtomico: "102.9",
                            valencia: "2, 3, 4, 6",
                            numeroAtomico: "45",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
                            cargaAtomica:"generalmente +3, varia entre -1 y +6 "
                            },
                            
                            Pd: {
                            PesoAtomico: "106.4",
                            valencia: "2, 4",
                            numeroAtomico: "46",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
                            cargaAtomica:" +2"
                            },
                            
                            Ag: {
                            PesoAtomico: "107.9",
                            valencia: "1, 2, 3, 4",
                            numeroAtomico: "47",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10 5p1",
                            cargaAtomica:"+1"
                            },
                            
                            Cd: {
                            PesoAtomico: "112.4",
                            valencia: "2",
                            numeroAtomico: "48",
                            estado: "Sólido",
                            categoria: "Metal de transición",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
                            cargaAtomica:"+2"
                            },
                            
                            In: {
                            PesoAtomico: "114.8",
                            valencia: "1, 3",
                            numeroAtomico: "49",
                            estado: "Sólido",
                            categoria: "Metal",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
                            cargaAtomica:"+3"
                            },
                            
                            Sn: {
                            PesoAtomico: "118.7",
                            valencia: "2, 4",
                            numeroAtomico: "50",
                            estado: "Sólido",
                            categoria: "Metal",
                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
                            cargaAtomica:"generalmente +4, varia entre -4 y +4"
                            },

                            Sb: {
                                PesoAtomico: "121.8",
                                valencia: "3, 5",
                                numeroAtomico: "51",
                                estado: "Sólido",
                                categoria: "Metal metaloide",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
                                cargaAtomica:"generalmente -3, varia entre -3 y +5"
                                },
                                
                                Te: {
                                PesoAtomico: "127.6",
                                valencia: "2, 4, 6",
                                numeroAtomico: "52",
                                estado: "Sólido",
                                categoria: "Metal metaloide",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
                                cargaAtomica:"generalmente -2, varia entre -2 y +6"
                                },
                                
                                I: {
                                PesoAtomico: "126.9",
                                valencia: "1, 3, 5, 7",
                                numeroAtomico: "53",
                                estado: "Sólido",
                                categoria: "Halógeno",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
                                cargaAtomica:"generalmente -1, varia entre -1 y +7"
                                },
                                
                                Xe: {
                                PesoAtomico: "131.3",
                                valencia: "0",
                                numeroAtomico: "54",
                                estado: "Gas",
                                categoria: "Gas noble",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
                                cargaAtomica:"neutro 0, puede tener varios estados excitados y formas de ionización "
                                },
                                
                                Cs: {
                                PesoAtomico: "132.9",
                                valencia: "1",
                                numeroAtomico: "55",
                                estado: "Sólido",
                                categoria: "Metal alcalino",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
                                cargaAtomica:" +1"
                                },
                                
                                Ba: {
                                PesoAtomico: "137.3",
                                valencia: "2",
                                numeroAtomico: "56",
                                estado: "Sólido",
                                categoria: "Metal alcalinotérreo",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
                                cargaAtomica:"+2"
                                },
                                
                                La: {
                                PesoAtomico: "138.9",
                                valencia: "3",
                                numeroAtomico: "57",
                                estado: "Sólido",
                                categoria: "Lantánido",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1 5d1",
                                cargaAtomica:"+3"
                                },
                                
                                Ce: {
                                PesoAtomico: "140.1",
                                valencia: "3, 4",
                                numeroAtomico: "58",
                                estado: "Sólido",
                                categoria: "Lantánido",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f2 5d1",
                                cargaAtomica:"generalmente +3, varia entre +3 y +4"
                                },
                                
                                Pr: {
                                PesoAtomico: "140.9",
                                valencia: "3",
                                numeroAtomico: "59",
                                estado: "Sólido",
                                categoria: "Lantánido",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3 5d1",
                                cargaAtomica:"+3"
                                },
                                
                                Nd: {
                                PesoAtomico: "144.2",
                                valencia: "3",
                                numeroAtomico: "60",
                                estado: "Sólido",
                                categoria: "Lantánido",
                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4 5d1",
                                cargaAtomica:"+3"
                                },

                                Pm: {
                                    PesoAtomico: "145.0",
                                    valencia: "3",
                                    numeroAtomico: "61",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5 5d1",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Sm: {
                                    PesoAtomico: "150.4",
                                    valencia: "2, 3",
                                    numeroAtomico: "62",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6 5d1",
                                    cargaAtomica:"+3"

                                    },
                                    
                                    Eu: {
                                    PesoAtomico: "151.9",
                                    valencia: "2, 3",
                                    numeroAtomico: "63",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
                                    cargaAtomica:"generalmente +2, varia entre +2 y +3"
                                    },
                                    
                                    Gd: {
                                    PesoAtomico: "157.3",
                                    valencia: "3",
                                    numeroAtomico: "64",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1 6p1",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Tb: {
                                    PesoAtomico: "158.9",
                                    valencia: "3",
                                    numeroAtomico: "65",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Dy: {
                                    PesoAtomico: "162.5",
                                    valencia: "3",
                                    numeroAtomico: "66",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Ho: {
                                    PesoAtomico: "164.9",
                                    valencia: "3",
                                    numeroAtomico: "67",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Er: {
                                    PesoAtomico: "167.3",
                                    valencia: "3",
                                    numeroAtomico: "68",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Tm: {
                                    PesoAtomico: "168.9",
                                    valencia: "2, 3",
                                    numeroAtomico: "69",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
                                    cargaAtomica:"+3"
                                    },
                                    
                                    Yb: {
                                    PesoAtomico: "173.0",
                                    valencia: "2, 3",
                                    numeroAtomico: "70",
                                    estado: "Sólido",
                                    categoria: "Lantánido",
                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
                                    cargaAtomica:"+3"
                                    },
                                
                                    Lu: {
                                        PesoAtomico: "174.9",
                                        valencia: "3",
                                        numeroAtomico: "71",
                                        estado: "Sólido",
                                        categoria: "Lantánido",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
                                        cargaAtomica:"+3"
                                        },
                                        
                                        Hf: {
                                        PesoAtomico: "178.5",
                                        valencia: "4",
                                        numeroAtomico: "72",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
                                        cargaAtomica:"+2"
                                        },
                                        
                                        Ta: {
                                        PesoAtomico: "180.9",
                                        valencia: "5",
                                        numeroAtomico: "73",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
                                        cargaAtomica:"+5"
                                        },
                                        
                                        W: {
                                        PesoAtomico: "183.8",
                                        valencia: "4, 6",
                                        numeroAtomico: "74",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
                                        cargaAtomica:"generalmente +6, varia entre 0 y +6"
                                        },
                                        
                                        Re: {
                                        PesoAtomico: "186.2",
                                        valencia: "4, 6, 7",
                                        numeroAtomico: "75",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
                                        cargaAtomica:"generalmente +7, varia entre -3 y +7"
                                        },
                                        
                                        Os: {
                                        PesoAtomico: "190.2",
                                        valencia: "4, 6, 8",
                                        numeroAtomico: "76",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
                                        cargaAtomica:"generalmente +4, varia entre -2 y +8"
                                        },
                                        
                                        Ir: {
                                        PesoAtomico: "192.2",
                                        valencia: "3, 4, 6",
                                        numeroAtomico: "77",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
                                        cargaAtomica:"generalmente +3, varia entre 0 y +6"
                                        },
                                        
                                        Pt: {
                                        PesoAtomico: "195.1",
                                        valencia: "2, 4",
                                        numeroAtomico: "78",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d9",
                                        cargaAtomica:"generalmente +2 y +4, varia entre 0 y +6"
                                        },
                                        
                                        Au: {
                                        PesoAtomico: "196.9",
                                        valencia: "1, 3",
                                        numeroAtomico: "79",
                                        estado: "Sólido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
                                        cargaAtomica:"generalmente +1 y +3"
                                        },
                                        
                                        Hg: {
                                        PesoAtomico: "200.6",
                                        valencia: "1, 2",
                                        numeroAtomico: "80",
                                        estado: "Líquido",
                                        categoria: "Metal de transición",
                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
                                        cargaAtomica:"+1 y +2"
                                        },

                                        Tl: {
                                            PesoAtomico: "204.4",
                                            valencia: "1, 3",
                                            numeroAtomico: "81",
                                            estado: "Sólido",
                                            categoria: "Metal",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
                                            cargaAtomica:"+1 y +3"
                                            },
                                            
                                            Pb: {
                                            PesoAtomico: "207.2",
                                            valencia: "2, 4",
                                            numeroAtomico: "82",
                                            estado: "Sólido",
                                            categoria: "Metal",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
                                            cargaAtomica:"generalmente +2 y +4, varia entre -4 y +4"
                                            },
                                            
                                            Bi: {
                                            PesoAtomico: "208.9",
                                            valencia: "3, 5",
                                            numeroAtomico: "83",
                                            estado: "Sólido",
                                            categoria: "Metal",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
                                            cargaAtomica:"generalmente +3, varia entre -3 y +5"
                                            },
                                            
                                            Po: {
                                            PesoAtomico: "209.0",
                                            valencia: "2, 4, 6",
                                            numeroAtomico: "84",
                                            estado: "Sólido",
                                            categoria: "Metal metaloide",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
                                            cargaAtomica:"generalmente -2, varia entre -2 y +6 "
                                            },
                                            
                                            At: {
                                            PesoAtomico: "210.0",
                                            valencia: "1, 3, 5, 7",
                                            numeroAtomico: "85",
                                            estado: "Sólido",
                                            categoria: "Halógeno",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
                                            cargaAtomica:"generalmente -1, varia entre -1 y +7 "
                                            },
                                            
                                            Rn: {
                                            PesoAtomico: "222.0",
                                            valencia: "0",
                                            numeroAtomico: "86",
                                            estado: "Gas",
                                            categoria: "Gas noble",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
                                            cargaAtomica:"neutro 0, forma raramente iones"
                                            },
                                            
                                            Fr: {
                                            PesoAtomico: "223.0",
                                            valencia: "1",
                                            numeroAtomico: "87",
                                            estado: "Sólido",
                                            categoria: "Metal alcalino",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
                                            cargaAtomica:"+1"
                                            },
                                            
                                            Ra: {
                                            PesoAtomico: "226.0",
                                            valencia: "2",
                                            numeroAtomico: "88",
                                            estado: "Sólido",
                                            categoria: "Metal alcalinotérreo",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
                                            cargaAtomica:"+2"
                                            },
                                            
                                            Ac: {
                                            PesoAtomico: "227.0",
                                            valencia: "3",
                                            numeroAtomico: "89",
                                            estado: "Sólido",
                                            categoria: "Actínido",
                                            configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f0 6d1",
                                            cargaAtomica:"+3"
                                            },

                                            Th: {
                                                PesoAtomico: "232.0",
                                                valencia: "4",
                                                numeroAtomico: "90",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f0 6d2",
                                                cargaAtomica:"+4"
                                                },
                                                
                                                Pa: {
                                                PesoAtomico: "231.0",
                                                valencia: "5",
                                                numeroAtomico: "91",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
                                                cargaAtomica:"+5"
                                                },
                                                
                                                U: {
                                                PesoAtomico: "238.0",
                                                valencia: "3, 4, 5, 6",
                                                numeroAtomico: "92",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
                                                cargaAtomica:"generalmente +4, varia entre +3 y +6"
                                                },
                                                
                                                Np: {
                                                PesoAtomico: "237.0",
                                                valencia: "3, 4, 5, 6, 7",
                                                numeroAtomico: "93",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
                                                cargaAtomica:"generalmente +3, varia entre +3 y +7"
                                                },
                                                
                                                Pu: {
                                                PesoAtomico: "244.0",
                                                valencia: "3, 4, 5, 6, 7",
                                                numeroAtomico: "94",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6 6d1",
                                                cargaAtomica:"generalmente +4, varia entre +3 y +7"
                                                },
                                                
                                                Am: {
                                                PesoAtomico: "243.0",
                                                valencia: "2, 3, 4, 5, 6",
                                                numeroAtomico: "95",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
                                                cargaAtomica:"generalmente +3, varia entre +2 y +7"
                                                },
                                                
                                                Cm: {
                                                PesoAtomico: "247.0",
                                                valencia: "3",
                                                numeroAtomico: "96",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d2",
                                                cargaAtomica:"+3"
                                                },
                                                
                                                Bk: {
                                                PesoAtomico: "247.0",
                                                valencia: "3, 4",
                                                numeroAtomico: "97",
                                                estado: "Sólido",
                                                categoria: "Actínido",
                                                configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p",
                                                cargaAtomica:"+3"
                                                },

                                                Cf: {
                                                    PesoAtomico: "251.0",
                                                    valencia: "2, 3",
                                                    numeroAtomico: "98",
                                                    estado: "Sólido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9 6d1",
                                                    cargaAtomica:"+3"
                                                    },
                                                    
                                                    Es: {
                                                    PesoAtomico: "252.0",
                                                    valencia: "2, 3",
                                                    numeroAtomico: "99",
                                                    estado: "Sólido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10 6d1",
                                                    cargaAtomica:"+3"
                                                    },
                                                    
                                                    Fm: {
                                                    PesoAtomico: "257.0",
                                                    valencia: "2, 3",
                                                    numeroAtomico: "100",
                                                    estado: "Desconocido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
                                                    cargaAtomica:"+3"
                                                    },
                                                    
                                                    Md: {
                                                    PesoAtomico: "258.0",
                                                    valencia: "2, 3",
                                                    numeroAtomico: "101",
                                                    estado: "Desconocido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
                                                    cargaAtomica:"generalmente +2 y +3"
                                                    },
                                                    
                                                    No: {
                                                    PesoAtomico: "259.0",
                                                    valencia: "2, 3",
                                                    numeroAtomico: "102",
                                                    estado: "Desconocido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
                                                    cargaAtomica:"generalmente +2 y +3"
                                                    },
                                                    
                                                    Lr: {
                                                    PesoAtomico: "262.0",
                                                    valencia: "3",
                                                    numeroAtomico: "103",
                                                    estado: "Desconocido",
                                                    categoria: "Actínido",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
                                                    cargaAtomica:"+3"
                                                    },
                                                    
                                                    Rf: {
                                                    PesoAtomico: "267.0",
                                                    valencia: "4",
                                                    numeroAtomico: "104",
                                                    estado: "Desconocido",
                                                    categoria: "Metal de transición",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p2",
                                                    cargaAtomica:"+4"
                                                    },
                                                    
                                                    Db: {
                                                    PesoAtomico: "270.0",
                                                    valencia: "5",
                                                    numeroAtomico: "105",
                                                    estado: "Desconocido",
                                                    categoria: "Metal de transición",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p3",
                                                    cargaAtomica:"desconocido"
                                                    },
                                                    
                                                    Sg: {
                                                    PesoAtomico: "271.0",
                                                    valencia: "6",
                                                    numeroAtomico: "106",
                                                    estado: "Desconocido",
                                                    categoria: "Metal de transición",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p4",
                                                    cargaAtomica:"desconocido"
                                                    },
                                                    
                                                    Bh: {
                                                    PesoAtomico: "270.0",
                                                    valencia: "7",
                                                    numeroAtomico: "107",
                                                    estado: "Desconocido",
                                                    categoria: "Metal de transición",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p5",
                                                    cargaAtomica:"desconocido"
                                                    },
                                                    
                                                    Hs: {
                                                    PesoAtomico: "277.0",
                                                    valencia: "8",
                                                    numeroAtomico: "108",
                                                    estado: "Desconocido",
                                                    categoria: "Metal de transición",
                                                    configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p6",
                                                    cargaAtomica:"desconocido"
                                                    },

                                                    Mt: {
                                                        PesoAtomico: "278.0",
                                                        valencia: "9",
                                                        numeroAtomico: "109",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p6 8s1",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Ds: {
                                                        PesoAtomico: "281.0",
                                                        valencia: "8, 10",
                                                        numeroAtomico: "110",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p6 8s2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Rg: {
                                                        PesoAtomico: "281.0",
                                                        valencia: "5, 7, 9, 11",
                                                        numeroAtomico: "111",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p7 8s2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Cn: {
                                                        PesoAtomico: "285.0",
                                                        valencia: "4, 6, 8, 10",
                                                        numeroAtomico: "112",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p8 8s2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Nh: {
                                                        PesoAtomico: "286.0",
                                                        valencia: "1, 3, 5",
                                                        numeroAtomico: "113",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p9 8s2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Fl: {
                                                        PesoAtomico: "289.0",
                                                        valencia: "2, 4",
                                                        numeroAtomico: "114",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p10 8s2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Mc: {
                                                        PesoAtomico: "289.0",
                                                        valencia: "3, 5",
                                                        numeroAtomico: "115",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p10 8s2 8p1",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Lv: {
                                                        PesoAtomico: "293.0",
                                                        valencia: "2, 4, 6",
                                                        numeroAtomico: "116",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p10 8s2 8p2",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Ts: {
                                                        PesoAtomico: "294.0",
                                                        valencia: "1, 3",
                                                        numeroAtomico: "117",
                                                        estado: "Desconocido",
                                                        categoria: "Metal de transición",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p10 8s2 8p3",
                                                        cargaAtomica:"desconocido"
                                                        },
                                                        
                                                        Og: {
                                                        PesoAtomico: "294.0",
                                                        valencia: "2, 4, 6",
                                                        numeroAtomico: "118",
                                                        estado: "Desconocido",
                                                        categoria: "Gas noble",
                                                        configuracionElectronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p10 8s2 8p4",
                                                        cargaAtomica:"desconocido"
                                                        },

        // Agregar información para otros elementos aquí...
    };
    return elementInfo[symbol] || {
        PesoAtomico: "N/A",
        valencia: "N/A",
        numeroAtomico: "N/A",
        estado: "N/A",
        categoria: "N/A",
        configuracionElectronica: "N/A",
        cargaAtomica:"N/A"
    };
}

// Función para mostrar el modal con la información del elemento
function abrirModal(symbol, name, number, atomicWeightValue, valenciaValue, numeroAtomicoValue, estadoValue, categoriaValue, configuracionElectronicaValue,cargaAtomicaValue) {
    elementSymbol.textContent = symbol;
    elementName.textContent = name;
    atomicNumber.textContent = ` ${number}`;
    atomicWeight.textContent = `${atomicWeightValue}`;
    valence.textContent = `${valenciaValue}`;
    numeroAtomico.textContent = ` ${numeroAtomicoValue}`;
    estado.textContent = `${estadoValue}`;
    categoria.textContent = ` ${categoriaValue}`;
    configuracionElectronica.textContent = ` ${configuracionElectronicaValue}`;
    cargaAtomica.textContent = ` ${cargaAtomicaValue}`;
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Evento para cerrar el modal cuando se haga clic en el botón de cerrar
closeBtn.addEventListener("click", cerrarModal);

// Agregar eventos de clic a los elementos <div> de la tabla periódica
const elementos = document.querySelectorAll(".fila div");
elementos.forEach(elemento => {
    elemento.addEventListener("click", () => {
        // Obtener información del elemento seleccionado
        const symbol = elemento.querySelector("label:nth-child(1)").textContent;
        const name = elemento.querySelector("label:nth-child(2)").textContent;
        const number = elemento.querySelector("label:nth-child(3)").textContent;
        // Aquí deberías obtener la información del peso atómico, valencia, número atómico, estado,
        // categoría y configuración electrónica del elemento.
        // Puedes utilizar la función getElementInfo que definimos anteriormente
        const { PesoAtomico, valencia, numeroAtomico, estado, categoria, configuracionElectronica,cargaAtomica } = getElementInfo(symbol);
        // Mostrar el modal con la información del elemento
        abrirModal(symbol, name, number, PesoAtomico, valencia, numeroAtomico, estado, categoria, configuracionElectronica, cargaAtomica);
    });
});
