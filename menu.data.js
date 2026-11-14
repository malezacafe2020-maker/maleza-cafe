window.MENU_DATA = [
  // ================= CREPAS & WAFFLES =================
  { id: 'cr_dulce_1', cat: 'crepas', name: 'Crepa Dulce Sencilla', price: 50, type: 'crepa_dulce', maxBases: 1, hasFruit: false, desc: '1 base a elegir + toque final de cortesía' },
  { id: 'cr_dulce_2', cat: 'crepas', name: 'Crepa Dulce Doble', price: 60, type: 'crepa_dulce', maxBases: 2, hasFruit: false, desc: '2 bases a elegir + toque final de cortesía' },
  { id: 'cr_dulce_3', cat: 'crepas', name: 'Crepa Dulce Con Fruta', price: 70, type: 'crepa_dulce', maxBases: 2, hasFruit: true, desc: '1 o 2 bases + 1 fruta a elegir' },
  { id: 'cr_sal_1', cat: 'crepas', name: 'Crepa Salada Clásica', price: 60, type: 'crepa_salada', desc: 'Jamón y queso Manchego' },
  { id: 'cr_sal_2', cat: 'crepas', name: 'Crepa Salada Peperoni', price: 60, type: 'crepa_salada', desc: 'Peperoni y queso Manchego' },
  { id: 'cr_sal_3', cat: 'crepas', name: 'Crepa Salada Hawaiana', price: 70, type: 'crepa_salada', desc: 'Jamón, queso Manchego y piña' },

  { id: 'wf_dulce_1', cat: 'crepas', name: 'Waffle Belga Sencillo', price: 40, type: 'crepa_dulce', isWaffle: true, maxBases: 1, hasFruit: false, desc: '1 base a elegir + toque final de cortesía' },
  { id: 'wf_dulce_2', cat: 'crepas', name: 'Waffle Belga Doble', price: 45, type: 'crepa_dulce', isWaffle: true, maxBases: 2, hasFruit: false, desc: '2 bases a elegir + toque final de cortesía' },
  { id: 'wf_dulce_3', cat: 'crepas', name: 'Waffle Belga Con Fruta', price: 50, type: 'crepa_dulce', isWaffle: true, maxBases: 2, hasFruit: true, desc: '1 o 2 bases + 1 fruta a elegir' },
  { id: 'wf_sal_1', cat: 'crepas', name: 'Waffle Salado Clásico', price: 50, type: 'crepa_salada', desc: 'Jamón y queso Manchego' },
  { id: 'wf_sal_2', cat: 'crepas', name: 'Waffle Salado Peperoni', price: 50, type: 'crepa_salada', desc: 'Peperoni y queso Manchego' },
  { id: 'wf_sal_3', cat: 'crepas', name: 'Waffle Salado Hawaiano', price: 55, type: 'crepa_salada', desc: 'Jamón, queso Manchego y piña' },

  // ================= ROLES ARTESANALES =================
  { id: 'rol_canela', cat: 'roles', name: 'Rol de Canela Clásico', price: 45, type: 'rol_dulce', desc: 'Horneado artesanal con canela y glaseado' },
  { id: 'rol_avellana', cat: 'roles', name: 'Rol de Avellana y Nuez', price: 55, type: 'rol_dulce', desc: 'Crema de avellanas y trozos de nuez' },
  { id: 'rol_manzana', cat: 'roles', name: 'Rol de Manzana Canela', price: 55, type: 'rol_dulce', desc: 'Compota artesanal de manzana y canela' },

  // ================= BANDERILLAS COREANAS =================
  { id: 'ban_deliciosa', cat: 'banderillas', name: 'Monstera Deliciosa', type: 'banderilla', prices: { 'Salchicha': 70, 'Queso manchego': 80, 'Combinada': 75 }, desc: 'Cubierta crujiente de papa + panko' },
  { id: 'ban_thai', cat: 'banderillas', name: 'Monstera Thai', type: 'banderilla', prices: { 'Salchicha': 65, 'Queso manchego': 75, 'Combinada': 70 }, desc: 'Cubierta de ramen + panko' },
  { id: 'ban_fuego', cat: 'banderillas', name: 'Monstera Fuego', type: 'banderilla', prices: { 'Salchicha': 60, 'Queso manchego': 70, 'Combinada': 65 }, desc: 'Empanizado flaming picante' },
  { id: 'ban_clasica', cat: 'banderillas', name: 'Monstera Clásica', type: 'banderilla', prices: { 'Salchicha': 60, 'Queso manchego': 70, 'Combinada': 65 }, desc: 'Empanizado tradicional crujiente' },
  { id: 'ban_mexi', cat: 'banderillas', name: 'Monstera Mexicheese', type: 'banderilla', prices: { 'Salchicha': 60, 'Queso manchego': 70, 'Combinada': 65 }, desc: 'Empanizado con queso y jalapeño' },

  // ================= LATTES ESPECIALES =================
  { id: 'esp_areca', cat: 'especiales', name: 'Areca (Coconut Latte)', price: 70, type: 'special_custom', image: 'img/areca.webp', desc: 'Bebida fría, espresso, leche cremosa y coco' },
  { id: 'esp_cosmos', cat: 'especiales', name: 'Cosmos (Strawberry Matcha)', price: 80, type: 'special_custom', image: 'img/cosmos.webp', desc: 'Bebida fría, matcha, leche cremosa y fresa' },
  { id: 'esp_magnolia', cat: 'especiales', name: 'Magnolia (Chocolate Latte)', price: 80, type: 'special_custom', image: 'img/magnolia.webp', desc: 'Bebida fría, espresso, leche cremosa y cold foam de chocolate' },
  { id: 'esp_crisantemo', cat: 'especiales', name: 'Crisantemo (Mango Matcha)', price: 85, type: 'special_custom', image: 'img/crisantemo.webp', desc: 'Bebida fría, matcha, leche cremosa y mango' },
  { id: 'esp_mandragora', cat: 'especiales', name: 'Mandrágora', price: 120, type: 'mandragora', image: 'img/mandragora.webp', desc: 'Frappé chocolate abuelita + pan de muerto relleno' },
  { id: 'latte_caliente', cat: 'especiales', name: 'Latte de Sabor Caliente', price: 65, type: 'flavor', allowShot: true, image: 'img/latte-caliente.webp', flavors: ['Caramelo', 'Vainilla', 'Avellana', 'Crema Irlandesa'], desc: 'Elige tu sabor favorito' },
  { id: 'latte_frio', cat: 'especiales', name: 'Latte de Sabor Frío', price: 70, type: 'flavor', allowShot: true, image: 'img/latte-frio.webp', flavors: ['Caramelo', 'Vainilla', 'Avellana', 'Crema Irlandesa'], desc: 'Elige tu sabor favorito' },

  // ================= BUBBLE TEA =================
  { id: 'bub_jacaranda', cat: 'bubble', name: 'Jacaranda (Taro Milk Tea)', price: 70, type: 'bubble', image: 'img/jacaranda.webp', desc: 'Taro, leche, té negro y tapioca' },
  { id: 'bub_helecho', cat: 'bubble', name: 'Helecho (Matcha Milk Tea)', price: 70, type: 'bubble', image: 'img/helecho.webp', desc: 'Matcha, leche, té negro y tapioca' },
  { id: 'bub_canela', cat: 'bubble', name: 'Canela (Chai Milk Tea)', price: 70, type: 'bubble', image: 'img/canela.webp', desc: 'Chai, leche, té negro y tapioca' },
  { id: 'bub_palmera', cat: 'bubble', name: 'Palmera (Coco Milk Tea)', price: 70, type: 'bubble', image: 'img/palmera.webp', desc: 'Coco, leche, té negro y tapioca' },
  { id: 'bub_alocasia', cat: 'bubble', name: 'Alocasia (Cookies & Cream)', price: 70, type: 'bubble', image: 'img/alocasia.webp', desc: 'Cookies and cream, leche, té negro y tapioca' },
  { id: 'bub_dalia', cat: 'bubble', name: 'Dalia (Moka Milk Tea)', price: 70, type: 'bubble', image: 'img/dalia.webp', desc: 'Moka, leche, té negro y tapioca' },
  { id: 'bub_girasol', cat: 'bubble', name: 'Girasol (Mango Tea)', price: 60, type: 'bubble', image: 'img/girasol.webp', desc: 'Mango, té negro y tapioca' },
  { id: 'bub_diente', cat: 'bubble', name: 'Diente de León (Maracuyá)', price: 60, type: 'bubble', image: 'img/diente-de-leon.webp', desc: 'Maracuyá, té negro y tapioca' },
  { id: 'bub_litchi', cat: 'bubble', name: 'Litchi', price: 60, type: 'bubble', image: 'img/litchi.webp', desc: 'Litchi, té negro y tapioca' },
  { id: 'bub_ternatea', cat: 'bubble', name: 'Ternatea (Matcha azul)', price: 70, type: 'bubble', image: 'img/ternatea.webp', desc: 'Matcha azul, leche, té negro y tapioca' },
  { id: 'bub_malus', cat: 'bubble', name: 'Malus (Manzana Verde)', price: 60, type: 'bubble', image: 'img/malus.webp', desc: 'Manzana verde, té negro y tapioca' },

  // ================= CAFETERÍA & BEBIDAS =================
  { id: 'caf_americano', cat: 'cafe', name: 'Americano', price: 45, type: 'simple', desc: 'Café de especialidad recién extraído' },
  { id: 'caf_capuchino', cat: 'cafe', name: 'Capuchino', price: 50, type: 'simple', desc: 'Espresso con leche vaporizada y espuma cremosa' },
  { id: 'caf_latte', cat: 'cafe', name: 'Latte Clásico', price: 50, type: 'simple', desc: 'Espresso suave con abundante leche cremosa' },
  { id: 'caf_lechero', cat: 'cafe', name: 'Lechero', price: 55, type: 'simple', desc: 'Café cargado con leche caliente espumada' },
  { id: 'caf_mocha', cat: 'cafe', name: 'Mocha', price: 55, type: 'simple', desc: 'Espresso, cacao artesanal y leche vaporizada' },
  { id: 'caf_cap_sabor', cat: 'cafe', name: 'Capuchino de Sabor', price: 60, type: 'flavor', allowShot: true, flavors: ['Caramelo', 'Vainilla', 'Avellana', 'Crema Irlandesa'], desc: 'Capuchino cremoso con jarabe a elegir' },
  { id: 'sin_chocolate', cat: 'cafe', name: 'Chocolate Caliente', price: 60, type: 'simple', desc: 'Cacao tradicional espumoso' },
  { id: 'sin_chai', cat: 'cafe', name: 'Chai Latte', price: 60, type: 'simple', desc: 'Infusión especiada con leche cremosa' },
  { id: 'sin_matcha', cat: 'cafe', name: 'Matcha Latte', price: 60, type: 'simple', desc: 'Té verde matcha ceremonial con leche' },
  { id: 'sin_tisana', cat: 'cafe', name: 'Tisana Frutal', price: 50, type: 'flavor_noshot', flavors: ['Frutos Rojos', 'Maracuyá-Cempasúchil'], desc: 'Infusión natural de frutas deshidratadas' },

  // Frappés, Sodas, Smoothies, Malteadas y Esquimos
  { id: 'frp_clasico', cat: 'cafe', name: 'Frappé Clásico', price: 60, type: 'frappe', flavors: ['Oreo', 'Chocolate Abuelita', 'Moka', 'Chai'], desc: 'Bebida frozen cremosa con crema batida' },
  { id: 'frp_premium', cat: 'cafe', name: 'Frappé Especial', price: 70, type: 'frappe', flavors: ['Café', 'Matcha'], desc: 'Bebida frozen intensa con crema batida' },
  { id: 'frp_caramelo', cat: 'cafe', name: 'Frappé Caramelo', price: 75, type: 'frappe', flavors: ['Caramelo'], desc: 'Frozen de café y caramelo con crema batida' },
  { id: 'frp_alcohol', cat: 'cafe', name: 'Frappé con Licor', price: 75, type: 'frappe', flavors: ['Crema Irlandesa', 'Rompope', 'Piña Colada', 'Baileys'], desc: 'Preparación frozen con toque de licor' },
  { id: 'sod_italiana', cat: 'cafe', name: 'Soda Italiana', price: 60, type: 'flavor_noshot', hasBobaToppings: true, flavors: ['Mora Azul', 'Mora Azul y Lavanda', 'Manzana Verde', 'Frutos Rojos'], desc: 'Agua mineralizada con jarabe frutal y hielo' },
  { id: 'ref_maleza', cat: 'cafe', name: 'Refresh', price: 60, type: 'flavor_noshot', hasBobaToppings: true, flavors: ['Maracuyá', 'Dragon Fruit'], desc: 'Bebida refrescante de fruta natural con hielo' },
  { id: 'smo_frutal', cat: 'cafe', name: 'Smoothie', price: 60, type: 'flavor_noshot', hasBobaToppings: true, flavors: ['Coco', 'Mango'], desc: 'Granizado frutal cremoso' },
  { id: 'mal_clasica', cat: 'cafe', name: 'Malteada Clásica', price: 60, type: 'malteada', flavors: ['Fresa', 'Vainilla', 'Chocolate'], desc: 'Batido cremoso de helado con crema batida' },
  { id: 'mal_alcohol', cat: 'cafe', name: 'Malteada con Licor', price: 75, type: 'malteada', flavors: ['Rompope', 'Piña Colada', 'Baileys'], desc: 'Batido cremoso de helado con toque de licor' },
  { id: 'esq_maleza', cat: 'cafe', name: 'Esquimo', price: 40, type: 'flavor_noshot', flavors: ['Café', 'Chocolate', 'Vainilla', 'Fresa', 'Chocolate Abuelita', 'Caramelo', 'Moka', 'Chai', 'Matcha', 'Taro'], desc: 'Bebida fría espumosa tradicional' },

  // ================= PROMOCIÓN DE TEMPORADA (OCULTA EN LISTADO GENERAL) =================
  { id: 'promo_pumpkin', cat: 'oculto', name: 'Pumpkin Spice', price: 60, type: 'pumpkin', desc: 'Nuestra bebida de Temporada' }
];
