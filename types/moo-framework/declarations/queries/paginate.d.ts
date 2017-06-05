/**
 * Representa itens resultados de uma paginação. Retorna informações para exibir uma listagem de objetos assim como uma barra de paginação.
 */
interface Paginate
{
	/** Array de objetos referentes à paginação. Estes objetos devem ser percorridos para exibição da listagem array */
	items: any[] // TODO: Saber tipo
	/** Página atual. */
	page: number
	/** Número de páginas. */
	totalPages: number
	/** Itens encontrados. */
	foundItems: number
	/** Coleção de Link das páginas próximas à atual. */
	numbers: Link[]
	/** Link da página anterior. */
	previous: Link
	/** Link da próxima página. */
	next: Link
	/** Link da primeira página. */
	firstLink: Link
	/** Link da última página. */
	last: Link
}