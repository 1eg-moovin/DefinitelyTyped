/**
 * Registro do Customer.
 */
interface CustomerRegistry
{
	/** Tipo de pessoa. Valores possíveis: 'np' - Pessoa física; 'jp' - Pessoa jurídica. */
	personType: 'np' | 'jp'
	/** Documento. */
	document: string
	/** Endereço de email. */
	email: string
	/** Nome ou razão social. */
	name: string
	/** Telefone. No formato (99) 9999999999. */
	phone: string
	/** Senha. */
	password: string
	/** Data de nascimento. No formato yyyy-mm-dd. */
	birthDate: string
	/** Determina se é isento de inscrição estadual. */
	stateRegistrationFree: boolean
	/** Número do inscrição estadual. */
	stateRegistrationNumber: number
	/** Código postal. */
	addressPostalCode: string
	/** Rua do endereço. */
	addressStreet: string
	/** Número da casa ou prédio do endereço. */
	addressNumber: string
	/** Informações adicionais do endereço, como número da sala ou apartamento. */
	addressAdditionalInfo: string
	/** Estado do endereço. */
	addressProvince: string
	/** Cidade do endereço. */
	addressCity: string
	/** Bairro do endereço. */
	addressDistrict: string
	/** Código ISO 3166-1 alpha-2 do país. */
	addressCountry: string
	/** Instruções para identificação do endereço. */
	addressInstructions: string
}