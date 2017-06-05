/**
 * Representa dados do processo de compra.
 */
interface Checkout
{
	/**Preço do carrinho. */
	cartPrice: number
	/** Preço do frete. */
	shippingPrice: number
	/** Preço dos descontos. */
	discountPrice: number
	/** Preço das taxas. */
	feePrice: number
	/** Preço total, com taxas e descontos aplicados. */
	totalPrice: number
}

/**
 * Representa o carrinho de compras. Contém dados e itens (produtos) do Checkout.
 */
interface CheckoutCart
{
	/** Total de produtos no carrinho. */
	quantity: number
	/** Preço total do carrinho. */
	price: number
	/** Coleção de CheckoutCartItem. */
	items:number
}

/**
 * Representa os itens (produtos) do carrinho.
 */
interface CheckoutCartItem
{
	/** Identificador do item no carrinho. */
	id: string
	/** Título do produto com as variants escolhidas. */
	title: string
	/** SKU do item. */
	sku: string
	/** Path da variante atual. */
	path: string
	/** Coleção de Picture com as fotos do item. */
	pictures: Picture[]
	/** Quantidade de itens atualmente no carrinho. */
	quantity: number
	/** Preço unitário. */
	unitPrice: number
	/** Preço total do produto (soma de todas as unidades) e de seus serviços adicionais. */
	totalPrice: number
	/** Coleção de CheckoutCartAdditional com os adicionais do item. */
	additional: CheckoutCartAdditional
}

/**
 * Representa adicionais dos itens.
 */
interface CheckoutCartAdditional
{
	/** Identificador do adicional. */
	id: string
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
 * Representa os descontos possíveis no checkout atual.
 */
interface CheckoutDiscount
{
	/** Preço total dos descontos aplicados. */
	price: number
	/** Coleção de CheckoutDiscountOption com as opções de desconto. */
	options: CheckoutDiscountOption
}

/**
 * Representa opções de desconto.
 */
interface CheckoutDiscountOption
{
	/** Identificador do desconto. */
	id: string
	/** Nome do desconto. */
	name:string
	/** Preço do desconto. */
	price: number
	/** Valor genérico para ser utilizado pelo tipo de desconto. */
	value: number
	/** Determina se desconto é aplicado automaticamente. */
	automatic: boolean
	/** Determina se desconto está atualmente selecionado. */
	selected: boolean
}

/**
 * Representa dados dos pagamentos possíveis.
 */
interface CheckoutPayment
{
	/** Coleção de PaymentGroup. */
	options: PaymentGroup
}

/**
 * Representa dados das opções de parcelamento.
 */
interface CheckoutPaymentInstalmentOption
{
	/** Número das parcelas. */
	number: number
	/** Preço total. */
	totalPrice: number
	/** Preço da parcela. */
	instalmentPrice: number
	/** Preço das taxas. */
	feePrice: number
	/** Preço dos descontos. */
	discountPrice: number
}

/**
 * Representa dados das opções de frete.
 */
interface CheckoutShipping
{
	/** Objecto ShippingAddress com o endereço de entrega. */
	destinationAddress: ShippingAddress
	/** Coleção de CheckoutShippingOption com as opções de frete. */
	deliveryOptions: CheckoutShippingOption
}

/**
 * Representa opções de entrega.
 */
interface CheckoutShippingOption
{
	/** Objeto ShippingMethod com informações do método de entrega. */
	deliveryMethod: ShippingMethod
	/** Valor cobrado pela opção de entrega. */
	price: number
	/** Prazo de entrega em dias úteis. */
	deliveryBusinessDays: number
}