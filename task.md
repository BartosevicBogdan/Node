Susikuriame NodeJS express serverį bei sujungiame su duomenų baze (viską atliekame tvarkingai ir švariai, kaip tik geriausiai mokame - naudojame dotenv, logginimą ir pan.) šiems route'ams:
	
GET /products (paduos visą informaciją iš products lentelės db)
POST /products (pridės vieną produktą pagal paduotą informaciją - image_url, title, description, price)
DELETE /products/:id (pagal paduotą dinaminį URL, ištrins vieną produktą)
GET /totalproducts (grąžins skaičių kiek iš viso yra produktų)

Duomenų bazės informacija (lentelė - products):