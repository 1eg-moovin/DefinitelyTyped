/**
 * Representa um pedido.
 */
interface Order
{
	/** Identificador do pedido. */
	id: string
	/** Data do pedido. */
	date: string
	/** Nome do status do pedido. */
	statusName: string
	/** Tipo do status do pedido. Valores possíveis: 'pending' - Pendente; 'approved' - Aprovado;	'canceled' - Cancelado;	'shipped' - Enviado; 'completed' - Finalizado.*/
	statusType: 'pending' | 'approved' | 'canceled' | 'shipped' | 'completed'
	/** Preço dos items. */
	itemsPrice: number
	/** Preço das entregas. */
	shippingsPrice: number
	/** Preço das descontos. */
	discountsPrice: number
	/** Preço total do pedido. */
	totalPrice: number
	/** Objeto Customer com informações do cliente. */
	customer: Customer
	/** Objeto ShippingAddress com informações da entrega. */
	deliveryAddress: ShippingAddress
	/** Coleção de OrderShipping com informações das entregas. */
	shippings: OrderShipping[]
	/**  Coleção de OrderPayment com informações dos pagamentos. */
	payments: OrderPayment[]
	/** Coleção de OrderItem com informações dos itens comprados. */
	items: OrderItem[]
}

/**
 * Representa adicionais do pedido.
 */
interface OrderAdditional
{
	/** Identificador da opção do adicional. */
	optionId: string
	/** Nome do adicional. */
	name: string
	/** Nome da opção adicional. */
	optionName: string
	/** Valor informado. */
	value: number
	/** Preço cobrado pelo adicional. */
	price: number
}

/**
 * Representa um item (produto) comprado
 */
interface OrderItem
{
	/** Título do produto. */
	title: string
	/** SKU do produto. */
	sku: string
	/** Objeto Picture com fotos. */
	pictures: Picture
	/** Quantidade de itens comprados. */
	quantity: number
	/** Valor total. */
	totalPrice: number
	/** Coleção de OrderAdditional. */
	additional: OrderAdditional
}

/**
 * Representa um pagamento.
 */
interface OrderPayment
{
	/** Objeto PaymentMethod com as informações da forma de pagamento. */
	paymentMethod: PaymentMethod
	/** Número de parcelas do pagamento. */
	instalments: number
	/** Valor pago na forma de pagamento. */
	paidPrice: number
	/** URL para emissão do boleto. */
	boletoUrl: string
	/** Data de vencimento do boleto. */
	boletoDueDate: string
}

/**
 * Representa uma entrega.
 */
interface OrderShipping
{
	/** Objeto ShippingMethod com informações do método de entrega. */
	deliveryMethod: ShippingMethod
	/** Código de rastreamento. */
	trackingCode: string
	/** Tempo de entrega em dias úteis. */
	deliveryBusinessDays: number
}