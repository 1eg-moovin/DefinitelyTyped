/**
 * Representa um endereço.
 */
interface Address
{
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
 * Representa um link.
 */
interface Link
{
	/** Texto de exibição. */
	text: string
	/** Title para descrição curta do texto. */
	title:string
	/** Href do link. */
	href:string
	/** Target do link. */
	target: string
}

/**
 * Representa um telefone.
 */
interface Phone
{
	/** Número do telefone. */
	fullNumber: string
}

/**
 * Representa uma foto.
 */
interface Picture
{
	/** URL da foto. */
	url: string
}

/**
 * Representa uma avaliação.
 */
interface Rating
{
	/** Score da avaliação. */
	score: number
	/** Melhor score possível. */
	bestScore: number
	/** Pior score possível. */
	worstScore: number
	/** Quantidade de avaliações. */
	amount: number
}

/**
 * Representa um texto qualquer.
 */
interface Text
{
	/** Texto. */
	text: string
}