const productos = [
  {
    nombre: "TYR CXT-1 TRAINER",
    precio: 153.99,
    imagen: "tyr-cxt",
    categoria_id: 1,
    id: 1,
    descripcion: "Las TYR CXT-1 Trainer revolucionaron el deporte cuando se dieron a conocer en los Crossfit Games 2022.Entresuela de espuma de NRG con una excelente capacidad de respuesta - Paredes laterales de goma que se extienden alrededor del talón para una mayor estabilidad y tracción - Lengüeta en el talón duradera para un deslizamiento suave durante los HSPU"
  },
  {
    nombre: "UNDER ARMOUR TRIBASE REIGN 5",
    precio: 130,
    imagen: "reign5",
    categoria_id: 1,
    id: 2,
    descripcion: "Las Tribase Reign 5 son la quinta edición de las emblemáticas zapatillas de cross training de Under Armour y sus mejoras ejemplifican a la perfección la inversión que hace la marca alemana en tecnología e investigación para poder brindar a los atletas el mejor equipamiento. - Nueva tecnología UA Warp en el upper - Nuevo sistema de cordones que se ajusta a la anatomía natural del pie."
  },
  {
    nombre: "NIKE METCON 9",
    precio: 139.99,
    imagen: "metcon9",
    categoria_id: 1,
    id: 3,
    descripcion: "Las zapatillas de CrossFit Nike Metcon 9 presentan un diseño totalmente nuevo para posicionarse como la mejor Metcon hasta la fecha. Los 3 factores más importantes que se han tenido en cuenta durante su diseño son: la estabilidad, la durabilidad y la sostenibilidad - El Hyperlift (la placa de TPU del tacón) es más grande en esta última edición para proporcionar una mayor estabilidad - El Rope Wrap (paredes laterales de goma) es mucho más alto que en su anterior versión para ser extremadamente durable y proteger aún más la zapatilla de la abrasión de la cuerda."
  },
  {
    nombre: "REEBOK LEGACY LIFTER III",
    precio: 199.99,
    imagen: "legacy-lifter3",
    categoria_id: 1,
    id: 4,
    descripcion: "Las zapatillas de halterofilia son indispensables para cualquier atleta que entrena levantamiento de pesas. Las Reebok Legacy Lifter III pretenden maximizar la sujeción y la estabilidad permitiendo el ajuste perfecto a través de la nueva lengüeta con la tecnología PUMP. - Entresuela de espuma EVA para un equilibrio perfecto entre soporte y reactividad en la puntera. -  Clip de TPU en el talónpara asegurar estabilidad"

  },
  // Nuevos productos para la categoría de pantalones (categoría_id: 2)
  {
    nombre: "PANTALON CORTO NIKE DRI-FIT KNIT 6.0 AOP",
    precio: 27.97,
    imagen: "pantalon-dryfit",
    categoria_id: 2,
    id: 5,
    descripcion: "Pantalón corto ideal para Cross Training, en verde y multicolor, para hombre."
  },
  {
    nombre: "SHORT UNDER ARMOUR PEAK WOVEN",
    precio: 65.00,
    imagen: "peak-woven",
    categoria_id: 2,
    id: 6,
    descripcion: "Short blanco crudo, ideal para Fitness & Gym y Activity. Para hombre."
  },
  {
    nombre: "PANTALON CORTO ADIDAS CLUB",
    precio: 40.00,
    imagen: "adidas-club",
    categoria_id: 2,
    id: 7,
    descripcion: "Pantalón corto gris, perfecto para Fitness & Gym y Activity. Para hombre."
  },
  {
    nombre: "SHORT ADIDAS CLUB",
    precio: 35.00,
    imagen: "club-rosa",
    categoria_id: 2,
    id: 8,
    descripcion: "Short rosa, diseñado para CrossFit, Fitness & Gym, y Activity. Para mujer."
  },
  {
    nombre: "PANTALON NIKE YOGA CROP",
    precio: 21.60,
    imagen: "yoga-crop",
    categoria_id: 2,
    id: 9,
    descripcion: "Pantalón corto de yoga en negro, ideal para Cross Training. Para mujer."
  },

  // Nuevos productos - Camisetas (categoría_id: 3)
  {
    nombre: "Adidas FRLFT Pro",
    precio: 52.50,
    imagen: "frlft-pro",
    categoria_id: 3,
    id: 10,
    descripcion: "Camiseta para actividades intensas como CrossFit y fitness, combina tecnología avanzada y diseño ergonómico para máximo rendimiento."
  },
  {
    nombre: "Reebok Vector",
    precio: 19.99,
    imagen: "vector",
    categoria_id: 3,
    id: 11,
    descripcion: "Ideal para el gimnasio, esta camiseta combina confort con durabilidad para soportar entrenamientos intensos."
  },
  {
    nombre: "Nike Dri-Fit",
    precio: 35.71,
    imagen: "tirantes",
    categoria_id: 3,
    id: 12,
    descripcion: "Camiseta de tirantes diseñada para Cross Training, utiliza tecnología Dri-Fit para mantenerte seco y cómodo."
  },
  {
    nombre: "Adidas 3S",
    precio: 28.00,
    imagen: "s3",
    categoria_id: 3,
    id: 13,
    descripcion: "Diseñada para CrossFit, fitness y actividades generales, esta camiseta combina estilo clásico con funcionalidad."
  },
  {
    nombre: "Under Armour HG Racer",
    precio: 15.40,
    imagen: "hg-racer",
    categoria_id: 3,
    id: 14,
    descripcion: "Camiseta de tirantes ligera y transpirable, perfecta para Cross Training, ofrece libertad de movimiento y comodidad."
  },
  {
    nombre: "Unchained Breath",
    precio: 19.50,
    imagen: "unchained",
    categoria_id: 3,
    id: 15,
    descripcion: "Top ideal para CrossFit, promueve el confort y la movilidad con un diseño atractivo y funcional."
  },

  // Nuevos productos - Mallas (categoría_id: 4)
  {
    nombre: "Nike Mid-Rise 7/8",
    precio: 49.99,
    imagen: "mid-rise",
    categoria_id: 4,
    id: 16,
    descripcion: "Diseñadas para actividades como CrossFit y fitness, estas mallas ofrecen ajuste y comodidad, con tecnología que favorece la transpiración."
  },
  {
    nombre: "Reebok RIE",
    precio: 34.99,
    imagen: "rie",
    categoria_id: 4,
    id: 17,
    descripcion: "Mallas óptimas para el gimnasio, combinan estilo y funcionalidad con tejido que mejora la movilidad y el confort."
  },
  {
    nombre: "Reebok Lux",
    precio: 54.99,
    imagen: "lux",
    categoria_id: 4,
    id: 18,
    descripcion: "Adecuadas para fitness, con diseño premium que asegura ajuste perfecto y soporte durante ejercicios intensos."
  },
  {
    nombre: "Nike Dri-Fit",
    precio: 34.94,
    imagen: "cortas-drifit",
    categoria_id: 4,
    id: 19,
    descripcion: "Cortas, ideales para Cross Training, utilizan tecnología Dri-Fit para mantener la frescura y soporte durante entrenamientos."
  },
  {
    nombre: "Reebok Workout Ready",
    precio: 40.00,
    imagen: "ready",
    categoria_id: 4,
    id: 20,
    descripcion: "Diseñadas para Cross Training, estas mallas combinan comodidad y soporte, ideales para cualquier tipo de entrenamiento."
  },
  {
    nombre: "Under Armour Rush HG Seamless",
    precio: 42.50,
    imagen: "rush-hg",
    categoria_id: 4,
    id: 21,
    descripcion: "Largas, ideales para Cross Training, ofrecen tecnología que mejora el rendimiento y comodidad sin costuras."
  },

  // Nuevos productos - Sudaderas (categoría_id: 5)
  {
    nombre: "Lift Heavy Carbon Cropped Statement",
    precio: 49.99,
    imagen: "HOODIE-LIFT-HEAVY",
    categoria_id: 5,
    id: 22,
    descripcion: "Sudadera para mujer, ideal para CrossFit, combina estilo y funcionalidad con diseño cropped y color negro."
  },
  {
    nombre: "Nike Yoga Cover Up 2",
    precio: 38.49,
    imagen: "nike-yoga",
    categoria_id: 5,
    id: 23,
    descripcion: "Sudadera sin capucha, diseñada específicamente para yoga, ofrece libertad de movimiento y comodidad en prácticas de movilidad."
  },
  {
    nombre: "Reebok UBF Woven Layering Top",
    precio: 23.98,
    imagen: "reebok-ubf",
    categoria_id: 5,
    id: 24,
    descripcion: "Manga 3/4, color blanco crudo, ideal para Cross Training, combina estilo y funcionalidad para entrenamientos versátiles."
  },
  {
    nombre: "Nike Dri-Fit",
    precio: 45.49,
    imagen: "sudadera-dryfit",
    categoria_id: 5,
    id: 25,
    descripcion: "Negra para hombre, adecuada para CrossFit, fitness y actividades generales, con tecnología Dri-Fit para confort."
  },
  {
    nombre: "Reebok Identity Logo",
    precio: 52.50,
    imagen: "reebok-identity",
    categoria_id: 5,
    id: 26,
    descripcion: "Gris para hombre, enfocada en Fitness & Gym, combina estilo clásico con funcionalidad para el ejercicio."
  },
  {
    nombre: "Adidas con Capucha",
    precio: 54.99,
    imagen: "sudadera-verde",
    categoria_id: 5,
    id: 27,
    descripcion: "Verde para hombre, ideal para CrossFit, fitness y actividades, combina calor y estilo con funcionalidad deportiva."
  },

  // Nuevos productos - Material (categoría_id: 6)
  {
    nombre: "Velites Earth 2.0",
    precio: 68.99,
    imagen: "velites",
    categoria_id: 6,
    id: 28,
    descripcion: "Comba pesada, ideal para entrenamiento funcional, mejora forma física y desarrollo muscular con diseño avanzado para velocidad y fuerza."
  },
  {
    nombre: "Timecap Pack Whipper 2.0",
    precio: 22.46,
    imagen: "timecap",
    categoria_id: 6,
    id: 29,
    descripcion: "Comba con mango largo para rotación mejorada, apta para todos los niveles, enfocada en mejorar la velocidad de los saltos dobles."
  },
  {
    nombre: "Picsil Azor 2 Agujeros",
    precio: 35.95,
    imagen: "picsil",
    categoria_id: 6,
    id: 30,
    descripcion: "Calleras para Crosstraining, diseño único para protección y agarre, fabricadas con material transpirable y resistente."
  },
  {
    nombre: "Harbinger Hexcore - Mujer",
    precio: 35.90,
    imagen: "harbinger",
    categoria_id: 6,
    id: 31,
    descripcion: "Cinturón diseñado para Cross Training, ofrece soporte lumbar óptimo con diseño específico para mujeres."
  },
  {
    nombre: "Trainlikefight Rainbow Cookie Beast",
    precio: 33.96,
    imagen: "trainlikefight",
    categoria_id: 6,
    id: 32,
    descripcion: "Cinturón para Crosstraining, asegura postura correcta en levantamiento de pesos, diseño que proporciona sujeción y protección lumbar."
  },
  {
    nombre: "TrainLikeFight Loud",
    precio: 23.95,
    imagen: "callera-train",
    categoria_id: 6,
    id: 33,
    descripcion: "Calleras de competición para Crosstraining, ofrecen agarre extremo y protección contra rozaduras, diseñadas para atletas exigentes."
  }

]

export {
  productos
}