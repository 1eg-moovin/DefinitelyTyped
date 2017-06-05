/**
 * Representa uma página de texto estático.
 */
interface StaticPage
{
	/**Tipo de página. Valores possíveis: 'institutional' - Páginas institucionais;	'troubleShooting' - Páginas de ajuda;	'service' - Páginas de serviços; 'privacy' - Páginas de privacidade. */
	type: 'institutional' | 'troubleShooting' | 'service' | 'privacy'
	/** Identificador da página. */
	identifier: string
	/** Titulo da Página. */
	title: string
	/** Texto da página. */
	text: string
	/** URL da página. */
	url: string
	/** Cabeçalhos adicionais. */
	head: string
	/** Resumo do texto. */
	overview: string
}
