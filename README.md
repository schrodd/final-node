# Entrega Final - Curso Node

API para Ecommerce.

## Preparación
### Configurar arhivo .env
MONGODB_URL: URL de Mongo para la conexión a BDD (Producción)\
MONGODB_URL_TEST: URL de Mongo para la conexión a BDD (Pruebas)\
NODEMAILER_EMAIL: Email del administrador a donde llegarán notificaciones\
NODEMAILER_PASSWORD: Contraseña del correo usado en nodemailer, necesaria para enviar y recibir las notificaciones\
PORT: Puerto (producción)\
PORT_TEST: Puerto (pruebas)\
DATABASE: BDD seleccionada, de momento sólo está implementada 'MONGODB'\
SESSION_DURATION: Duración de la sesión en ms

## Endpoints
### Registro
Para poder hacer uso del sistema, primero debe registrarse en el mismo.

Endpoint: /register\
Método: POST\
Body: \
```
{
  "username": "tuUsuario",
  "password": "1234"
}
```

Si el registro es exitoso, se iniciará una sesión automáticamente.

### Iniciar sesión
Una vez creada la cuenta puede iniciar sesión con sus credenciales.

Endpoint: /login\
Método: POST\
Body: 
```
{
  "username": "tuUsuario",
  "password": "1234"
}
```

Una vez iniciada la sesión, será redirigido al listado de productos.

### Cerrar sesión
Cierra la sesión activa inmediatamente.

Endpoint: /logout\
Método: POST

## Productos

### Ver listado de productos

Endpoint: / o /products\
Método: GET\
Resultado: Listado de todos los productos

### Ver producto específico

Endpoint: /products/[id]\
Método: GET\
Resultado: Producto especifico

### Ver productos por categoría

Endpoint: /products/category/[cat]\
Método: GET\
Resultado: Listado de productos de la categoria deseada

### Cargar producto

Endpoint: /products\
Método: POST\
Body: 
```
{
  "name": [nombre del producto],
  "price": [precio (solo numeros)],
  "category": [categoria del producto]
}
```
Resultado: Estado de la operacion

### Actualizar producto

Endpoint: /products/[id]\
Método: PUT\
Body: Propiedades a actualizar. No necesariamente tienen que estar todas presentes.
```
{
  "prop": [nuevo valor],
  "prop2": [nuevo valor],
}
```
Resultado: Estado de la operacion

### Borrar producto

Endpoint: /products/[id]\
Método: DELETE\
Resultado: Estado de la operacion

## Carritos
El carrito de compra almacena ids de productos, no los valores.\
Al momento de hacer la orden, se buscan las propiedades actuales del producto y la orden se establece con los valores que tenian los productos al momento de la compra.\
El carrito se crea siempre usando el ID del usuario que lo creó.

### Crear carrito
Los id's deben pertenecer a productos existentes.

Endpoint: /carts\
Método: POST\
Body: 
```
{
  "products": [
    {
      "prodId": [ID de producto],
      "qty": 1
    },
    {
      "prodId": [ID de producto],
      "qty": 1
    },
    [...]
  ]
}
```
Resultado: Estado de la operacion

### Buscar carrito

Endpoint: /carts/[id]\
Método: GET\
Resultado: Carrito especifico

### Actualizar / Borrar carrito
Funciona igual que con los productos. 

## Órdenes
Para crear una orden, es necesario crear un carrito y tener su ID.

### Crear orden
Al crear una orden, pasan varias cosas
1. Se busca el carrito
2. Se buscan los productos usando los id's en el carrito
3. Se crea una copia del estado actual de los productos y se inserta en la orden
4. Se carga la orden en la BDD
5. Se elimina el carrito usado para crear la orden
6. Se envia una notificacion al adminstrador de la compra que se genero

Endpoint: /orders/[id del carrito]\
Método: POST\
Resultado: Estado de la operacion

### Buscar / Actualizar / Borrar orden
Funciona igual que con los productos. 
