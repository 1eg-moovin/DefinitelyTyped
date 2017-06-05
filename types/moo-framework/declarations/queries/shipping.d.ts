/**
 * Endereço de entrega.
 */
interface ShippingAddress
{
	/** Nome do destinatário. */
	recipientName: string
	/** Documento de identidade do destinatário. */
	recipientIdentityDocument: string
	/** Telefone do destinatário. */
	recipientPhone: string
	/** Código postal. */
	postalCode: string
	/** Código ISO 3166-1 alpha-2 do país. */
	country: string
	/** Logradouro (rua, avenida, etc). */
	street: string
	/** Cidade. */
	city: string
	/** Estado ou província. */
	province: string
	/** Bairro ou distrito. */
	district: string
	/** Número da casa ou prédio. */
	number: number
	/** Informações adicionais, como número da sala ou apartamento. */
	additionalInfo: string
}

/**
 * Método de entrega.
 */
interface ShippingMethod
{
	/** Identificador da opção de entrega. */
	id: string
	/** Tipo da entrega. Valores possíveis: 'express' - expressa;	'standard' - normal. */
	type: 'express' | 'standard'
	/** Nome da opção de entrega. */
	name: string
	/** Nome da transportadora. */
	logisticProviderName: string
}