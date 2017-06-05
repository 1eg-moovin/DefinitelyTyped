/**
 * Representa um cliente.
 */
interface Customer
{
	/** Tipo de pessoa. Possíveis valores: 'np' - Pessoa física; 'lp' - Pessoa jurídica. */
	personType: 'np' | 'lp'
	/** Documento (CPF ou CNPJ) */
	document: string
	/** Endereço de e-mail. */
	email: string
	/** Nome ou razão social. */
	name:string
	/** Data de nascimento. No formato yyyy-mm-dd. */
	birthDate: string
	/** Telefone do cliente. string */
	phone: string
	/** Foto do cliente. */
	picture: Picture
	/** Número da inscrição estadual. */
	stateRegistrationNumber: string
	/** Determina se é isento da inscrição estadual. */
	stateRegistrationFree: boolean
	/** Determina se cliente possui senha definida. */
	hasPasswordDefined: boolean
	/** Define se autoriza recebimento de newsletter. */
	authorizeNewsletter: boolean
	/** Object Address com o endereço de cobrança do cliente. */
	billingAddress: Address
}

/**
 * Representa relatório de descontos do cliente.
 */
interface CustomerDiscountStatement
{
	/** Quantidade disponível. */
	availableAmount: number
	/** Quantidade disponível em valor. */
	availablePrice: number
	/** Coleção de CustomerDiscountStatementTransaction com o histórico de utilização e ganhos de descontos. */
	transactions: CustomerDiscountStatementTransaction
}

/**
 * Representa transação de utilização ou ganhos de desconto.
 */
interface CustomerDiscountStatementTransaction
{
	/** Data da transação. */
	date: string
	/**  Tipo da transação. Valores possíveis: 'credit' - Crédito (ganho); 'debit' - Débito (utilização). */
	type: 'credit' | 'debit'
	/** Valor ou quantidade utilizado ou ganho. */
	amount: number
	/** Descrição da transação. */
	description: string
}

/**
 * Endereço de entrega do cliente.
 */
interface CustomerShippingAddress
{
	/** Identificador do endereço de entrega. */
	id: string
	/** Nome do destinatário. */
	recipientName: string
	/** Documento de identidade do destinatário. */
	recipientIdentityDocument: string
	/** Telefone do destinatário */
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
 *	Informações de estado do cliente. 
 */
interface CustomerState
{
	/** Login do cliente. */
	login: string
	/** Nome do cliente string. */
	name: string
	/** Estado de identificação do usuário. Valores possíveis: 'anonymous' - Usuário não identificado; 'identified' - Usuário identificado.	'authenticated' - Usuário autenticado. */
	state: string
}