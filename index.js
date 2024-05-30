let libreria = [
    {
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        genero: "Misterio",
        idioma: "Español",
        formato: "Tapa blanda",
        isbn: "9780307474278",
        descripcion: "Una intrigante novela de misterio que combina arte, religión y simbología.",
        estado: "Nuevo",
        ubicacion: "Estantería 1, Sección A",
        fecha_publicacion: "18 de marzo de 2003",
        editorial: "Vintage",
        paginas: 589,
        dimensiones: "20.3 x 13.2 x 3.8 cm",
        peso: "400 g",
        precio:7
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        idioma: "Español",
        formato: "Tapa dura",
        isbn: "9788498382663",
        descripcion: "El primer libro de la famosa serie de Harry Potter, que sigue las aventuras del joven mago.",
        estado: "Usado",
        ubicacion: "Estantería 2, Sección B",
        fecha_publicacion: "1 de septiembre de 1998",
        editorial: "Vintage",
        paginas: 256,
        dimensiones: "21.6 x 14 x 3.2 cm",
        peso: "350 g",
        precio:26
    },

    
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        formato: "Tapa blanda",
        isbn: "978-0307474279",
        descripcion: "Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
        estado: "Nuevo",
        ubicacion: "Estantería 3, Sección C",
        fecha_publicacion: "30 de mayo de 1967",
        editorial: "Vintage",
        paginas: 432,
        dimensiones: "20 x 13.5 x 3 cm",
        peso: "350 g",
        precio:28
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        formato: "Tapa dura",
        isbn: "978-0-547-23486-9",
        descripcion: "Una distopía que sigue la vida de Winston Smith en un mundo totalitario donde el Gran Hermano todo lo ve.",
        estado: "Nuevo",
        ubicacion: "Estantería 4, Sección D",
        fecha_publicacion: "8 de junio de 1949",
        editorial: "Vintage",
        paginas: 328,
        dimensiones: "21.6 x 14.6 x 3 cm",
        peso: "400 g",
        precio:30
    },

    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Novela romántica",
        idioma: "Inglés",
        formato: "Tapa blanda",
        isbn: "978-3-598-24626-6",
        descripcion: "Una de las novelas más famosas de Jane Austen que narra la historia de Elizabeth Bennet y el Sr. Darcy.",
        estado: "Usado",
        ubicacion: "Estantería 5, Sección E",
        fecha_publicacion: "28 de enero de 1813",
        editorial: "Vintage",
        paginas: 432,
        dimensiones: "19.7 x 12.7 x 2.8 cm",
        peso: "300 g",
        precio:10.99
    },
    {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Novela de aventuras",
        idioma: "Inglés",
        formato: "Tapa dura",
        isbn: "978-1-84749-483-7",
        descripcion: "Una épica historia sobre la obsesión del capitán Ahab por cazar a la ballena blanca.",
        estado: "Nuevo",
        ubicacion: "Estantería 6, Sección F",
        fecha_publicacion: "18 de octubre de 1851",
        editorial: "Richard Bentley",
        paginas: 625,
        dimensiones: "23 x 15.5 x 4.5 cm",
        peso: "550 g",
        precio:14
    },
    {
        titulo: "El señor de los anillos: La comunidad del anillo",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía épica",
        idioma: "Español",
        formato: "Tapa dura",
        isbn: "978-84-450-7197-2",
        descripcion: "La primera parte de la trilogía de El señor de los anillos, que sigue la aventura de Frodo Bolsón para destruir el Anillo Único.",
        estado: "Nuevo",
        ubicacion: "Estantería 7, Sección G",
        fecha_publicacion: "29 de julio de 1954",
        editorial: "Richard Bentley",
        paginas: 496,
        dimensiones: "21.5 x 15 x 3.5 cm",
        peso: "480 g",
        precio:16.5
    },
    {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        idioma: "Español",
        formato: "Tapa blanda",
        isbn: "978-84-397-0673-2",
        descripcion: "Una historia que relata el asesinato de Santiago Nasar en un pequeño pueblo caribeño y cómo todos sabían que iba a suceder.",
        estado: "Nuevo",
        ubicacion: "Estantería 8, Sección H",
        fecha_publicacion: "1 de enero de 1981",
        editorial: "Richard Bentley",
        paginas: 128,
        dimensiones: "20 x 13.5 x 1 cm",
        peso: "150 g",
        precio:16
    },
    {
        titulo: "Los miserables",
        autor: "Victor Hugo",
        genero: "Novela histórica",
        idioma: "Español",
        formato: "Tapa blanda",
        isbn: "978-84-376-0494-7",
        descripcion: "Una monumental novela que sigue la vida de Jean Valjean y otros personajes en la Francia del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Estantería 9, Sección I",
        fecha_publicacion: "3 de abril de 1862",
        editorial: "Richard Bentley",
        paginas: 1800,
        dimensiones: "19 x 13 x 6 cm",
        peso: "900 g",
        precio:14
    },
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Novela gótica",
        idioma: "Inglés",
        formato: "Tapa dura",
        isbn: "978-1-59308-009-4",
        descripcion: "La historia de un joven llamado Dorian Gray, cuya belleza se preserva mientras su retrato envejece en su lugar.",
        estado: "Usado",
        ubicacion: "Estantería 10, Sección J",
        fecha_publicacion: "20 de junio de 1890",
        editorial: "Richard Bentley",
        paginas: 254,
        dimensiones: "20 x 14 x 2 cm",
        peso: "350 g",
        precio:25.8
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela de aventuras",
        idioma: "Español",
        formato: "Tapa blanda",
        isbn: "978-84-8346-232-8",
        descripcion: "Una obra maestra de la literatura española que narra las aventuras de un caballero soñador y su fiel escudero Sancho Panza.",
        estado: "Nuevo",
        ubicacion: "Estantería 11, Sección K",
        fecha_publicacion: "16 de enero de 1605",
        editorial: "Juan de la Cuesta",
        paginas: 863,
        dimensiones: "21 x 15 x 4 cm",
        peso: "600 g",
        precio:25
    },
    {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Literatura infantil",
        idioma: "Francés",
        formato: "Tapa dura",
        isbn: "978-84-261-2826-7",
        descripcion: "Un cuento clásico que sigue las aventuras de un pequeño príncipe que viaja por el universo.",
        estado: "Nuevo",
        ubicacion: "Estantería 12, Sección L",
        fecha_publicacion: "6 de abril de 1943",
        editorial: "Juan de la Cuesta",
        paginas: 96,
        dimensiones: "22.5 x 15 x 1.5 cm",
        peso: "200 g",
        precio:5
    },
    {
        titulo: "Anna Karenina",
        autor: "León Tolstói",
        genero: "Novela realista",
        idioma: "Ruso",
        formato: "Tapa blanda",
        isbn: "978-84-206-7754-3",
        descripcion: "Una historia de amor y tragedia ambientada en la alta sociedad rusa del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Estantería 13, Sección M",
        fecha_publicacion: "20 de octubre de 1877",
        editorial: "Juan de la Cuesta",
        paginas: 864,
        dimensiones: "21 x 14 x 5 cm",
        peso: "750 g",
        precio:21
    },
    {
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Novela",
        idioma: "Inglés",
        formato: "Tapa dura",
        isbn: "978-84-376-0494-7",
        descripcion: "Una novela que retrata la decadencia de la sociedad americana en la década de 1920.",
        estado: "Nuevo",
        ubicacion: "Estantería 14, Sección N",
        fecha_publicacion: "10 de abril de 1925",
        editorial: "Juan de la Cuesta",
        paginas: 180,
        dimensiones: "20 x 13 x 2.5 cm",
        peso: "300 g",
        precio:11.5
    },
    {
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Epopeya",
        idioma: "Griego antiguo",
        formato: "Tapa blanda",
        isbn: "978-84-206-4978-5",
        descripcion: "Una de las obras maestras de la literatura clásica que narra el viaje de Ulises de vuelta a casa después de la Guerra de Troya.",
        estado: "Nuevo",
        ubicacion: "Estantería 15, Sección O",
        fecha_publicacion: "Siglo VIII a.C.",
        editorial: "Juan de la Cuesta",
        paginas: 368,
        dimensiones: "19 x 12.5 x 2 cm",
        peso: "250 g",
        precio:11
    },
    {
        titulo: "Drácula",
        autor: "Bram Stoker",
        genero: "Novela gótica",
        idioma: "Inglés",
        formato: "Tapa blanda",
        isbn: "978-84-206-3886-2",
        descripcion: "La clásica historia de terror que sigue al Conde Drácula desde Transilvania a Inglaterra, donde busca expandir su reino de terror.",
        estado: "Nuevo",
        ubicacion: "Estantería 16, Sección P",
        fecha_publicacion: "26 de mayo de 1897",
        editorial: "Alianza Editorial",
        paginas: 608,
        dimensiones: "18.5 x 12.5 x 3.5 cm",
        peso: "400 g",
        precio:12
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        genero: "Novela gótica",
        idioma: "Inglés",
        formato: "Tapa dura",
        isbn: "978-84-206-3897-8",
        descripcion: "Una novela que explora los límites de la ciencia y la moralidad a través de la creación de un ser humano artificial.",
        estado: "Nuevo",
        ubicacion: "Estantería 17, Sección Q",
        fecha_publicacion: "1 de enero de 1818",
        editorial: "Alianza Editorial",
        paginas: 288,
        dimensiones: "21 x 14.5 x 2 cm",
        peso: "350 g",
        precio:10
    },
    {
        titulo: "Las aventuras de Tom Sawyer",
        autor: "Mark Twain",
        genero: "Novela de aventuras",
        idioma: "Inglés",
        formato: "Tapa blanda",
        isbn: "978-84-206-7509-9",
        descripcion: "Una novela clásica que sigue las travesuras del joven Tom Sawyer en el Mississippi.",
        estado: "Usado",
        ubicacion: "Estantería 18, Sección R",
        fecha_publicacion: "1 de diciembre de 1876",
        editorial: "Alianza Editorial",
        paginas: 368,
        dimensiones: "18.5 x 12.5 x 2 cm",
        peso: "300 g",
        precio:19.99
    },
    {
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Novela",
        idioma: "Inglés",
        formato: "Tapa blanda",
        isbn: "978-84-206-4897-9",
        descripcion: "Una novela que aborda temas como la injusticia racial y la pérdida de la inocencia en el sur de Estados Unidos durante la década de 1930.",
        estado: "Nuevo",
        ubicacion: "Estantería 19, Sección S",
        fecha_publicacion: "11 de julio de 1960",
        editorial: "Alianza Editorial",
        paginas: 376,
        dimensiones: "19 x 13 x 2.5 cm",
        peso: "320 g",
        precio:10.99
    },
    {
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        genero: "Tragedia",
        idioma: "Inglés",
        formato: "Tapa blanda",
        isbn: "978-84-206-3737-7",
        descripcion: "Una de las obras más conocidas de Shakespeare que relata la trágica historia de amor entre Romeo y Julieta.",
        estado: "Nuevo",
        ubicacion: "Estantería 20, Sección T",
        fecha_publicacion: "1 de enero de 1597",
        editorial: "Alianza Editorial",
        paginas: 320,
        dimensiones: "18 x 11.5 x 2 cm",
        peso: "280 g",
        precio:8.99
    }
];

let nuevoLibro ={
        titulo: "habitos atonicos",
        autor: "William pansea",
        genero: "Refelxion",
        idioma: "español",
        formato: "Tapa blanda",
        isbn: "978-84-206-3737-01",
        descripcion: "equeños cambios cotidianos que, con el paso del tiempo y el tesón, se convertirán en rutina, haciendo cambiar nuestro comportamiento y, por lo tanto, nuestra existencia.",
        estado: "Nuevo",
        ubicacion: "Estantería 50, Sección A",
        fecha_publicacion: "1 de enero de 2018",
        editorial: "Alianza Editorial",
        paginas: 520,
        dimensiones: "20 x 11.5 x 4 cm",
        peso: "300 g",
        precio:15
}

// libreria.push(nuevoLibro)
// console.log(libreria)

// console.log(libreria);


// libreria.forEach((libro,index) =>{
//     console.log(`${index +1} titulo : ${libro.titulo}`);
// })
//---------------------metodo map---------------------------------
 const TITULO= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        autor:libro.autor,
        editorial:libro.editorial
    }
 })

 const Editorial= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        editorial:libro.editorial
    }
 })

 const PESO= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        peso:libro.peso,
    }
 })
 const PRECIO= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        precio:libro.precio,
    }
 })
 const ESTADO= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        estado:libro.estado,
        
    }
 })
 const UBICACION= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        ubicacion:libro.ubicacion,
        
    }
 })
 const PAGINAS= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        paginas:libro.paginas,
        
    }
 })
 const DIMENSIONES= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        dimensiones:libro.dimensiones,
        
    }
 })
 const FECHA= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        fecha:libro.fecha_publicacion,
        
    }
 })
 const ISBN= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        isbn:libro.isbn,
        
    }
 })
 const DESCRIPCION= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        descripcion:libro.descripcion,
        
    }
 })
 const FORMATO= libreria.map((libro)=>{
    return{
        titulo:libro.titulo,
        formato:libro.formato,
        
    }
 })
// console.table(TITULO)
// console.table(Editorial)
// console.table(PESO)
// console.table(PRECIO)
// console.table(ESTADO)
// console.table(UBICACION)
// console.table(PAGINAS)
// console.table(DIMENSIONES)
// console.table(DESCRIPCION)
// console.table(ISBN)
// console.table(FORMATO)
// console.table(FECHA)



//------------------spreed operator.-----------------------------

// const spreed= libreria.map((libro)=>{
//     return{
//         ...libro,
//         descuento:0.20
//     }
// })
// const MostrarDescuento= libreria.map((libro)=>{
//     return{
//         titulo:libro.titulo,
//         autor:libro.autor,
//         editorial:libro.editorial,
//         precio:libro.precio,
//         descuento:libro.descuento
//     }
// })
//----------------------filter-----------------------------------
// const Libroscaros= libreria.filter((libro)=>{
//     return libro.precio>16
// })

//----------------------menu--------------------------------------
let continuar= "si";
while (continuar === "si") {
    let menu= prompt("que deseas realizar\n1. ver libros disponibles\n2.agregar nuevo libro\n3.borrar un libro\n4.listado de libros\n5.agregar Decuento a productos\n6.resumen de este segmento");
    switch (menu) {
        case "1":
            let decision= prompt("deseas ver los demas datos")
            if (decision === "si") {
                libreria.forEach((libro,index) =>{
                    console.log(`${index } titulo : ${libro.titulo} autor : ${libro.autor} genero : ${libro.genero} idioma : ${libro.idioma} formato: ${libro.formato } isb: ${libro.isbn} descripcion: ${libro.descripcion} estado: ${libro.estado} ubicacion: ${libro.ubicacion}  fecha de publicacion : ${libro.fecha_publicacion} editorial : ${libro.editorial} paginas: ${libro.paginas} dimensiones: ${libro.dimensiones} peso: ${libro.peso}`);
                })
            }else{
                libreria.forEach((libro,index) =>{
                    console.log(`${index } titulo : ${libro.titulo}`);
                })
            }
            break;
        case "2":
            let nuevo = {
                titulo: prompt("titulo"),
                autor: prompt("autor"),
                genero: prompt("genero"),
                idioma: prompt("idioma"),
                formato: prompt("formato"),
                isbn: prompt("isbn"),
                descripcion: prompt("descripcion"),
                estado: prompt("estado"),
                ubicacion: prompt("ubicacion"),
                fecha_publicacion: prompt("fecha de bublicacion  "),
                editorial: prompt("editorial"),
                paginas:prompt("paginas"),
                dimensiones: prompt("dimensiones"),
                peso: prompt("peso"),
                precio:prompt("precio")
            }
            libreria.push(nuevo)
            console.log("agregado con exito");
            libreria.forEach((libro,index) =>{
                console.log(`${index } titulo : ${libro.titulo}`);
            })
            break;
        case "3":
                libreria.pop()
                console.log("borrado con exito");
                console.table(libreria)
                break;
        case "4":
            let decision2= prompt("Que listado quieres ver \n1.Editorial\n2.peso\n3.precio\n4.estado\n5.ubicacion\n6.paginas\n7.dimensiones\n8.descripcion\n9.isbn\n10.formato\n11.fecha")
            if (decision2 ===1 || decision2 === "1") {
                console.table(Editorial)
            }
            if (decision2 ===2 || decision2 === "2") {
                console.table(PESO)
            }
            if (decision2 ===3 || decision2 === "3") {
                console.table(PRECIO)
            }if (decision2 ===4 || decision2 === "4") {
                console.table(ESTADO)
            }
            if (decision2 ===5 || decision2 === "5") {
                console.table(UBICACION)
            }
            if (decision2 ===6 || decision2 === "6") {
                console.table(PAGINAS)
            }
            if (decision2 ===7 || decision2 === "7") {
                console.table(DIMENSIONES)
            }
            if (decision2 ===8 || decision2 === "8") {
                console.table(DESCRIPCION)
            }
            if (decision2 ===9 || decision2 === "9") {
                console.table(ISBN)
            }
            if (decision2 ===10 || decision2 === "10") {
                console.table(FORMATO)
            }if (decision2 ===11 || decision2 === "11") {
                console.table(FECHA)
            }
            break;
        case "5":
            const spreed= libreria.map((libro)=>{
                return{
                    ...libro,
                    descuento:20
                }
            }).map((libro)=>{
                return{
                    titulo:libro.titulo,
                    autor:libro.autor,
                    editorial:libro.editorial,
                    precio:libro.precio,
                    descuento:libro.descuento
                }
            })
            console.table(spreed)
            break;
        case"6":
            let decision3=prompt("Que deseas ver :\n1.libros mayores a 50 dolares\n2.libros con menos de 100 paginas\n3.libros mayores a 20 dolares\n4.ver libros con el numero mas alto de paginas \n5.libros mas caros\n6. informacion basica de el libro")
            switch (decision3) {
                case "1":
                    const Libroscaros50= libreria.filter((libro)=>{
                        return libro.precio>50
                    }).map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            precio:libro.precio
                        }
                    })
                  console.table(Libroscaros50)
                    break;
                case "2":
                    const LibrosPaginas= libreria.filter((libro)=>{
                        return libro.paginas<100
                    }).map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            editorial:libro.editorial,
                            paginas:libro.paginas
                        }
                    })
                 
                        console.table(LibrosPaginas)
                    
                    break;
                case "3":
                    const Libroscaros20= libreria.filter((libro)=>{
                        return libro.precio>20
                    }).map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            precio:libro.precio
                        }
                    })
                   
                        console.table(Libroscaros20)
                   
                    break;
                case "4":
                    const paginasM= libreria.sort((a, b)=>b.paginas-a.paginas).map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            paginas:libro.paginas
                        }
                    })
                    
                        console.table(paginasM)
                   
                    break;
                case "5":
                    const Libroscaros= libreria.sort((a, b)=>b.precio-a.precio).map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            precio:libro.precio
                        }
                    })
                  console.table(Libroscaros)
                    break;
                case "6":
                    const librosEDitorial = libreria.map((libro)=>{
                        return{
                            titulo:libro.titulo,
                            autor:libro.autor,
                            editorial:libro.editorial,
                            precio:libro.precio
                        }
                    })
                    console.table(librosEDitorial)
                    break;
                default:
                    break;
            }
        break;
        default:
            break;
    }
    continuar= prompt("Deseas continuar")
}