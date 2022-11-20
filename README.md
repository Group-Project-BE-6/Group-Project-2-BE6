# Dokumentasi web services dan RESTful API yang dibuat

## Kelompok BE 6
* Arif Setiawan
* Vanya Mazura
* Zuhri Agusdino

## Built with

- express js
- mongoose
- mongodb
- bcrypt
- jsonwebtoken
- dotenv

### Konsul

#### get All Konsul

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/konsul
```

#### get Konsul By Id

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/konsul/:id
```

#### add Konsul

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/konsul

request:
{
	"pasien" : "",
	"psikolog" : "",
	"keluhan" : "",
	"descKeluhan" : "",
	"tanggal_periksa" : ""
}
```

#### update Konsul By Id

pada postman atur metode menjadi PUT
endpoint

```
http://localhost:3000/konsul
```

#### delete Konsul By Id

pada postman atur metode menjadi DELETE
endpoint

```
http://localhost:3000/konsult/:id
```

---

userPasien

#### get all user pasien

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/userPasien
```

#### get user Pasien By Id

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/userPasien/:id
```

#### add user Pasien

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/userPasien/register

request:
{
"nama" : "",
"email" : "",
"passsword" : ""
}
```

#### update user Pasien By Id

pada postman atur metode menjadi PUT
endpoint

```
http://localhost:3000/userPasien/:id
```

#### delete user Pasien user By Id

pada postman atur metode menjadi DELETE
endpoint

```
http://localhost:3000/userPasien/:id
```

---

Pasien

#### get all pasien

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/Pasien
```

#### get Pasien By Id

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/Pasien/:id
```

#### add Pasien

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/Pasien

request:
{
"nama" : "",
"email" : "",
"passsword" : ""
}
```

#### update Pasien By Id

pada postman atur metode menjadi PUT
endpoint

```
http://localhost:3000/Pasien/:id
```

#### delete Pasien user By Id

pada postman atur metode menjadi DELETE
endpoint

```
http://localhost:3000/Pasien/:id
```

---

psikolog

#### get all psikolog

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/psikolog
```

#### get psikolog By Id

pada postman atur metode menjadi GET
endpoint

```
http://localhost:3000/psikolog/:id
```

#### add psikolog

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/psikolog

request:
{
"nama" : "",
"gender" : "",
"age" : ""
}
```

#### update psikolog By Id

pada postman atur metode menjadi PUT
endpoint

```
http://localhost:3000/psikolog/:id
```

#### delete psikolog By Id

pada postman atur metode menjadi DELETE
endpoint

```
http://localhost:3000/psikolog/:id
```

---

#### register psikolog

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/userPsikolog/register

request :
{
  "nama" : "",
  "email" : "",
  "password" : ""
}
```

#### login psikolog

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/userPsikolog/login

request :
{
  "email" : "",
  "password" : ""
}
```

#### register user

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/userPasien/register
request :
{
  "nama" : "",
  "email" : "",
  "password" : ""
}
```

#### login user

pada postman atur metode menjadi POST
endpoint

```
http://localhost:3000/pasien/login
request :
{
  "email" : "",
  "password" : ""
}
```
