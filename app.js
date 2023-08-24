const apiKey = process.env.apiKey
const apiUrl = process.env.apiUrl

const iziContext = `Eres un asistente virtual de la empresa izipay, una empresa que presta servicios de procesamiento de pagos con tarjetas y billeteras electrónicas de Peru, enfocado en el cliente y con capacidad de liderar un mercado en constante cambio. En caso no se pueda dar una respuesta precisa invitar al cliente a llamar a los numeros: (01) 213-0808 o 0801-18181, en los horarios 8am a 8pm. Algunas cifras de la empresa: +700 000 comercios afiliados, +650 colaboradores, +23 años de trayectoria, 7° puesto en Great Place to Work (2022). izipay cuenta con los siguientes servicios online: izipay online (pasarela de pago segura para establecer negocios online), izipay web (servicio de integracion para paginas Wix para realizar pagos). Productos físicos: POS android P2 Mini, POS android DX8000, POS android P2 SE, izi Jr, Arisale, DCC, Agente izipay, PinPad - integrado a caja. `

const appContext = `Preguntas frecuentes con respecto al APP izipay:
  ¿Cuánto cuesta el APP izipay?
  Descarga el APP izipay GRATIS.
  
  ¿Qué opciones de pago puedo utilizar?
  Puedes utilizar las siguientes opciones: cobro con tarjeta en celular, QR, link de pago, PagoEfectivo y cobro con izi Jr.
  
  ¿Cuánto me cobran de comisión?
  Con link de pago: 3.44 % + S/ 0.50 + IGV por cada venta. Por promoción la comisión será de 3.44 % + IGV hasta el 31 de diciembre 2021.
  Con tarjeta de débito y crédito en el APP izipay: 3.44 % + IGV.
  Con tarjetas extranjeras: 3.99 % + IGV.
  Con PagoEfectivo: 3.95%
  Con QR: S/ 0. Si el total de transacciones con QR sobrepasa los S/ 10,000, se empleará la tarifa regular (3.44 % para tarjetas nacionales). Esta promoción no aplica para comercios que superen los S/ 20,000 mensuales.
  ¿Se paga mantenimiento por usar el APP izipay?
  No, izipay no cobra mantenimientos fijos mensuales por el uso del APP izipay.
  
  ¿Puedo utilizar el APP izipay sin tener los equipos?
  Sí, solo debes de descargarte el APP izipay.
  
  ¿Cómo me afilio al APP izipay?
  Ingresa aquí, selecciona el producto APP izipay y completa los datos del formulario de afiliación.
  
  ¿Cómo activo mi cuenta?
  Luego de afiliarte, recibirás un correo con tus credenciales de acceso y el enlace para activar tu cuenta (recuerda revisar tu carpeta de spam o no deseados si no lo encuentras). Ingresa y sigue las indicaciones en la pantalla.
  
  ¿Cómo inicio sesión en el APP izipay?
  En la pantalla de inicio, ingresa tu usuario y contraseña (enviados a tu correo) y selecciona "Iniciar sesión". Si no recuerdas estos datos, da clic en "¿Olvidaste tu contraseña?".
  
  ¿Hasta qué monto puedo hacer transacciones?
  Con QR hasta S/ 1500
  Con tarjeta en celular hasta S/ 150
  Con tarjeta en POS hasta S/ 1500
  Con link de pago hasta S/ 1500
  ¿Hasta qué monto puedo cobrar con mi celular?
  Recuerda que puedes cobrar hasta S/800 y que, por tu seguridad, para cobrar montos que superen los S/150 se te solicitará que ingreses tu PIN de seguridad.
  
  ¿Qué transacciones puedo anular?
  Se pueden anular transacciones hechas con tarjeta en celular o en POS, y con link de pago.
  `

const onlineContext = `Preguntas frecuentes con respecto izipay online:
  
  ¿Puedo integrar cualquier tipo de web con izipay online?
  Así es. Nuestra pasarela de pagos tiene distintos tipos de integración: plugin, formulario, redirección y formulario incrustado.
  
  ¿Qué plugins tienen disponibles?
  Contamos con los siguientes plugins que permiten que la integración sea en minutos si armaste tu propia tienda en la siguientes plataformas: Magento, Odoo, OpenCart 3, Prestashop, Shopify y Woocommerce.
  
  ¿Los servicios están disponibles para todas las tarjetas?
  Efectivamente, nuestra pasarela maneja todas las marcas de tarjetas y sus servicios están disponibles para todas ellas: Visa, Mastercard, Amex y Diners.
  
  ¿La pasarela de pago puede funcionar en apps?
  Así es. Nuestra plataforma tiene integración con apps móviles y mantiene todos los servicios para esa integración, incluyendo la autenticación.
  
  ¿Cuánto tiempo demora el proceso de integración?
  Depende mucho del empeño y dedicación que el comercio le dedique al proceso.
  
  Puede ser desde 2 días hasta 3 meses.
  
  ¿izipay online puede integrarse a todas las aplicaciones?
  No, la aplicación debe tener implementada la función de carrito de compras para poder proceder con la integración de la pasarela para app.
  
  ¿Se pueden hacer transacciones en soles y dólares?
  Puedes manejar ambas monedas en la plataforma, pero para que tus abonos sean en dólares y en soles debes tener un código de comercio por cada moneda.
  
  ¿Dónde puedo ver los reportes de transacciones?
  Todo el detalle de tus transacciones, reportes y su gestión lo puedes ver en el panel administrativo que viene con la plataforma. Te permite tener una gestión completa de tu negocio virtual.
  
  ¿El depósito de las transacciones es al día siguiente?
  Así es, el depósito de las transacciones es después de 24 horas útiles.
  
  ¿Hay alguna plataforma para resolver dudas técnicas?
  Nuestra documentación técnica se encuentra en los siguientes links:
  
  https://secure.micuentaweb.pe/doc/es-PE/
  https://secure.micuentaweb.pe/doc/es-PE/free-payment-plugins
  
  Preguntas frecuentes con respecto a izipay web: 
  ¿Hay algún cobro adicional luego de contratar el plan izipay web?
  No, una vez que hayas comprado tu suscripción mensual no será necesario realizar ningún otro pago durante ese mes. El primer pago es de S/ 163 que incluye el costo de afiliación y el costo mensual del plan. A partir del segundo mes, el costo será de S/ 65 mensuales que se debitarán de forma automática a la tarjeta de crédito o débito asociada desde la afiliación.
  
  ¿A qué tipo de negocios está dirigido este producto?
  Está dirigido a todo tipo de negocios, por ejemplo: restaurantes, hoteles, agencias de viaje y turismo, empresas de bienestar y salud, salones, peluquerías, moda y belleza, educación, artes creativas, landing page, fotografía, eventos, etc.
  
  ¿Qué canales de atención tengo disponibles en caso de dudas o consultas?
  En caso de dudas o consultas relacionadas con tu cuenta izipay, facturación o pasarela de pago, comunícate al 213-0808 (opción 3) o escríbenos a plataformaecommerce@izipay.pe.
  
  ¿Cómo se creará mi tienda online?
  Al momento de la compra, te asignaremos un asesor personalizado con el que te reunirás vía online. Él te ayudará a crear tu tienda y la dejará lista para que solo te encargues de subir tus productos o servicios. A este proceso lo llamamos inducción u onboarding.
  
  ¿Cómo se gestionará el dominio para mi tienda online?
  El plan incluye un dominio propio para tu tienda online (.com). Si ya tienes uno, necesitarás saber los DNS y dárselos a nuestro asesor en el momento de la inducción para que pueda configurarlos en tu tienda.
  
  Una vez hecha la compra, ¿en cuánto tiempo estará lista mi tienda online?
  Crearás tu tienda online con un asesor el día de tu inducción.
  
  ¿Contaré con un rol de administrador para mi tienda online?
  Si, podrás administrar directamente tu tienda online de manera fácil y rápida con tu usuario y clave. Y no solo eso, también podrás hacerlo con las mismas credenciales desde tu celular a través de la app Wix Owner, que puedes descargar totalmente gratis desde Play Store y App Store.`

const posContext = `¿La comisión es la misma para débito y crédito?
  Sí, la comisión para tarjetas de débito y crédito es de 3.44 % más IGV. En cambio, para tarjetas extranjeras es de 3.99 % más IGV.
  
  ¿Emite voucher físico?
  Sí, nuestros equipos izi Smart, POS android DX8000 y POS android P2 SE permiten imprimir vouchers físicos. Por otro lado, los POS izi Jr y POS android P2 Mini no imprimen vouchers. Sin embargo, se pueden enviar por SMS o correo electrónico. Además, con el izi Jr se pueden compartir vouchers por redes sociales.
  
  ¿También venden los POS en regiones?
  Claro, ¡izipay está presente en todo el Perú!
  
  ¿Se paga una mensualidad por el internet en los POS?
  No, nuestros POS tienen internet ilimitado, por lo que no es necesario realizar ningún otro pago mensual.
  
  ¿Qué garantía tienen los equipos?
  Nuestros equipos cuentan con una garantía por daños de fábrica de un año.
  
  ¿Puedo comprar con DNI, RUC o carné de extranjería?
  ¡Así es! Puedes comprar con DNI, RUC o carné de extranjería sin problema.
  
  ¿Dónde veo el reporte de mis ventas?
  Todos los clientes tienen acceso al portal "Mi cuenta", al cual podrás ingresar con el documento con el que realizaste la compra de tu equipo. Puedes ubicar “Mi Cuenta” en la parte superior derecha de nuestra web.
  
  ¿Tengo que usar mi POS recurrentemente o tener un mínimo de ventas al mes?
  No, no hay un monto mínimo de ventas que debas realizar mensualmente, el único cobro es el de la comisión por cada venta.
  
  ¿Puedo acceder a un préstamo teniendo un POS izipay?
  Sí, por ser parte de la familia izipay puedes acceder a un préstamo con CIMA, empresa que cuenta con respaldo de Interbank. Conoce más aquí:
  
  https://cima.pe/preguntas-frecuentes
  ¿Puedo conectar mi POS a una red wifi?
  Sí, nuestros POS Android, además de tener un chip ilimitado de internet, cuentan con configuración wifi.`

const qrContext = `Preguntas frecuentes con respecto a los codigos QR:
  ¿Qué es el cobro con QR y qué te permite hacer?
  El pago con QR (quick response) es una solución de cobro adicional que convierte al dispositivo (celular) de tu cliente en una billetera móvil y le permite realizar pagos de manera rápida y segura. Tus clientes podrán pagarte a través de Plin, Yape y Izipay Ya .
  
  ¿Qué es una billetera móvil?
  Es una aplicación mediante la cual tu cliente puede realizar una transferencia desde su cuenta hacia tu comercio, sin necesidad de una tarjeta física.
  
  ¿Con cuáles billeteras móviles se puede pagar actualmente?
  Con Plin, Yape y Izipay Ya .
  
  ¿Cómo funciona el pago con código QR de izipay?
  Los dispositivos izipay (POS y APP izipay) generan un código QR que puede ser leído por la billetera móvil de tu cliente para realizar el pago por su consumo. Para ver activada la opción de QR deberás actualizar el POS o APP izipay.
  
  ¿Qué pasa si no confirmo el pago con QR en el POS izipay (botón verde)?
  Puedes ingresar al Reporte de ventas del POS izipay para verificar si se llevó a cabo la transacción.
  
  ¿Cuál es el monto mínimo y máximo de transacciones con QR?
  En APP izipay, el monto mínimo de transacción es de S/ 1.00 y el monto máximo es de S/ 1500.00.
  
  En el POS izipay, el monto mínimo de transacción es de S/ 1.00 y el monto máximo es de S/ 2500.00
  
  ¿Cuándo se abona el dinero de las ventas por utilizar pago con QR?
  Las ventas se depositan al siguiente día útil.
  
  ¿Se puede anular un pago realizado con QR?
  No, no es posible anular la compra por pagos con QR.
  
  ¿Cuáles son los beneficios de cobrar con código QR?
  Seguridad:
  - El monto pagado por el cliente siempre será el que tu comercio ingrese.
  - Elimina el uso de efectivo y evita el contacto físico.
  Practicidad:
  - Tu comercio no necesita estar afiliado a todas las billeteras móviles para aceptar sus pagos.
  - La conciliación de cuentas se realiza con un solo reporte unificado.
  - Tu cliente no necesita llevar su billetera para efectuar el pago, solo requiere su celular.
  
  ¿Qué tan segura es la tecnología QR?
  El código QR cumple con todos los requisitos del estándar EMV para el procesamiento de las transacciones de pago efectuadas con billetera móvil. Así, garantizamos la interoperabilidad global del uso de esta tecnología en la industria de medios de pago.`

async function getGptAnswer(sysContext, question, temp) {
    const messages = [
        {
            role: 'system',
            content: sysContext,
        },
        { role: 'user', content: question },
    ]

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: temp,
            max_tokens: 1024,
            n: 1,
            stop: null,
        }),
    })

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    const answer = data.choices[0].message.content
    return answer
}

async function solveQuestion(product, question) {
    let context = iziContext

    if (product.includes('online')) {
        context += onlineContext
    } else if (product.includes('app')) {
        context += appContext + qrContext
    } else {
        context += posContext + qrContext
    }
    question = `Estoy usando el producto ${product}. ${question}`

    console.log('Context: ', context)

    return await getGptAnswer(context, question, 0.8)
}

export const handler = async (event) => {
    const requestBody = JSON.parse(event.body)
    const product = requestBody.product
    const question = requestBody.question

    console.log(event)
    console.log('Producto: ', product, '\nPregunta: ', question)

    try {
        const result = await solveQuestion(product, question)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success', result }),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error', error }),
        }
    }
}
