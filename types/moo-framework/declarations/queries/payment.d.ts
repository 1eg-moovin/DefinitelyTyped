/**
 * Grupo de formas de pagamento.
 */
interface PaymentGroup
{
	/** Identificador do grupo. */
	id: string
	/** Nome do grupo. */
	name: string
	/** Coleção de PaymentMethod com as formas de pagamento do grupo. */
	methods: PaymentMethod[]
}

/**
 * Forma de pagamento.
 */
interface PaymentMethod
{
	/** Identificador do método de pagamento. */
	id: string
	/** Slug da forma de pagamento. */
	slug:string
	/** Nome da forma de pagamento. */
	name:string
	/** Número máximo de parcelas da modalidade. */
	maxInstalments: number
}