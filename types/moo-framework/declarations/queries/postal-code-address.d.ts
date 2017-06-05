/**
 * Representa um endereço obtido através de um CEP.
 */
interface PostalCodeAddress
{
	/** Código postal. */
	postalCode: string
	/** Código ISO 3166-1 alpha-2 do país. */
	country: string
	/** Rua. */
	street: string
	/** Cidade. */
	city: string
	/** Estado ou província. */
	province: string
	/** Bairro ou distrito. */
	district:string
}