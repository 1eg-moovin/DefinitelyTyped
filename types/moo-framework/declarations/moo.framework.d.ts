/// <reference types="jquery" />
/**
 * @author Guilherme Gades Vargas <guilherme@moovin.com.br>
 * @author Rhagni Oliveira <rhagni@moovin.com.br>
 * @author Filipe Roberto Beck <filipe.beck@moovin.com.br>
 * @version 0.5
 * @copyright 2016
 */
/** Nativo, mas Typescript não reconhece. */
declare const escape: (text: string) => string;
/** Intância de `MooFramework` injetada em cada script dos widgets. */
declare const moo: MooFramework;
/**
 * Objeto indexável.
 */
interface Dictionary<T> {
    [index: string]: T;
}
/**
 * Classe de acesso a todos os serviços de consulta e atualização de produtos, informações do usuário e demais dados relacionados ao site.
 */
declare class MooFramework {
    /**
     * // NOTE: A semântica está invertida com `widgetHandlerList`
     * Lista dos widgets da página (identificador e callback).
     */
    static widgetList: Dictionary<(this: Element) => void>;
    /**
     * // NOTE: A semântica está invertida com `widgetList`
     * Responsável por armazenar a lista de funções dos widgets, realizando a separação por índice único.
     */
    static widgetHandlerList: Array<{
        /** Attributo `id` do widget - ex.: "#meu-widget" */
        selector: string;
        /** Identificador sem '#' */
        widget: string;
    }>;
    /**
     * URL da loja, API e recursos.
     */
    static url: {
        ui: string;
        api: string;
        layoutCommon: string;
    };
    /**
     * Elemento que compõe o widget
     */
    readonly context: JQuery;
    /**
     * Constrói com o elemento especificado
     * @param context - Elemento a ser utilizado como contexto.
     */
    constructor(context: JQuery);
    /**
     * Retorna o elemento de acordo com o seletor, tendo o contexto do construtor como base.
     * @param selector - Seletor CSS do elemento.
     * @param javascriptObject - Determina o tipo de objeto a ser retornado - `true` retorna um objeto Javascript; `false` retorna um objeto jQuery.
     */
    find(selector: string, javascriptObject?: Boolean): Element | JQuery;
    /**
     * Adiciona `id` e `callback` à lista de widgets.
     * @param id - Identificador do widget dentro do objeto. Precisa obrigatoriamente ser um identificador <strong>único</strong>.
     * @param callback - Callback a ser executado.
     */
    static pushWidget(id: string, callback: (this: Element) => void): void;
    /**
     * Adiciona customização de widget à lista à serem chamados.
     * @param id - Identificador do widget dentro do objeto. Precisa obrigatoriamente ser um identificador <strong>único</strong>.
     * @param selector - Seletor do elemento do widget no DOM.
     */
    static pushWidgetHandler(id: string, selector: string): void;
    /**
     * Executa os scripts de todos os widgets.
     */
    static triggerWidgetsHandler(): void;
    /**
     * Lista de máscaras aplicáveis nos campos (inputs).
     * @example
     * <input type="text" name="cpf" data-mask="cpf" /> // Aplica máscara de CPF
     *
     * <input type="text" name="cpf" data-mask="phone" /> // Aplica máscara de telefone
     */
    static masks: {
        cpf: {
            mask: (value: string) => string;
            maxlength: number;
        };
        date: {
            mask: (value: string) => string;
            maxlength: number;
        };
        phone: {
            mask: (value: string) => string;
            maxlength: number;
        };
        cnpj: {
            mask: (value: string) => string;
            maxlength: number;
        };
        cep: {
            mask: (value: string) => string;
            maxlength: number;
        };
        price: {
            mask: (value: string) => string;
        };
    };
    /**
     * Aplica máscaras em tempo real nos campos com o atributo "data-mask".
     * @param elementNode Elemento (campo) a receber a máscara no DOM.
     * @param maskName Nome da função de máscara a ser aplicada na chamada.
     */
    static toggleMask(elementNode: HTMLInputElement, maskName: string): void;
    /**
     * Inicia os eventos de aplicação de máscaras nos campos (inputs).
     */
    static triggerEventsMask(): void;
    /**
     * Itera os arrays aninhados de `collection` e retorna um array com todos os valores encontrados.
     * @param collection - Raiz das propriedades aninhadas.
     * @param keys - Nomes das proprieadeds aninhadas, formando um 'caminho' até a propriedade destino a ser iterada.
     * @return Array com todos os valores encontrados.
     * @example
     * var root = [
     *   {
     *     a: [
     *       {
     *         b: ['One', 'Two']
     *       },
     *       {
     *         b: ['Three', 'Four']
     *       }
     *     ]
     *   },
     *   {
     *     a: [
     *       {
     *         b: ['Five', 'Six']
     *       },
     *       {
     *         b: ['Seven', 'Eight']
     *       }
     *     ]
     *   }
     * ]
     * // Os valores de `value` serão respectivamente: 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'
     * moo.innerEach(root, 'a', 'b', value => console.log(value))
     */
    static inner(collection: any[], ...keys: string[]): any[];
    /**
     * Observa as mutações no widget. O observador é disconectado antes de chamar o manipulador e reconectado logo após a manipulação, evitando possíveis loops infinitos.
     * @param config - Configurações com as mutações a serem observadas.
     * @param handler - Função manipuladora das mutações. Não pode ser nulo.
     * @return A instância do observador criado.
     */
    observe(config: MutationObserverInit | null, handler: MutationCallback): MutationObserver;
    /**
     * Registra `eventHandler` para ser executado sempre que algum widget disparar o evento do tipo `evenType`.
     * @param eventType - Tipo do evento.
     * @param eventHandler - Manipulador do evento.
     */
    listen(eventType: string, eventHandler: (detail: any, event?: CustomEvent) => void): void;
    /**
     * Dispara um evento do tipo `eventType` com as informações de `detail` que será ouvido por todos os manipuladores registrados.
     * @param eventType - Tipo do evento.
     * @param detail - Detalhes do evento.
     */
    fire(eventType: string, detail: any): void;
    /**
     * Recupera coleção de banners registrados para a área especificada.
     * @param path - Caminho
     * @param options - Objeto com o ID da área.
     * @return Promessa de coleção de banners.
     */
    query(path: 'Banner', options: {
        areaId: number;
    }): Promise<Banner[]>;
    /**
     * Recupera o estado do login para a senha ou documento específicado.
     * @param path - Caminho
     * @param options - Objeto com a senha ou documento do usuário.
     * @return Promessa do estado do login.
     */
    query(path: 'Customer/Check', options: {
        login: string;
    }): Promise<{
        login: string;
        hasPasswordDefined: boolean;
    }>;
    /**
     * Recupera `Customer` para o usuário atualmente identificado ('identified'). Caso o usuário não esteja autenticado ('authenticated'), alguns dados são ofuscados.
     * @param path - Caminho.
     * @return Promessa de objeto `Customer`.
     */
    query(path: 'Customer/Detail'): Promise<Customer>;
    /**
     * Recupera `CustomerDiscountStatement` de bônus para o usuário atualmente identificado ('identified'). Caso o usuário não esteja autenticado ('authenticated'), o histórico de transações não é recuperado.
     * @param path - Caminho.
     * @return Promessa de objeto `CustomerDiscountStatement`.
     */
    query(path: 'Customer/Discount/Bonus'): Promise<CustomerDiscountStatement>;
    /**
     * Recupera `CustomerDiscountStatement` de pontos de fidelidade para o usuário atualmente identificado ('identified'). Caso o usuário não esteja autenticado ('authenticated'), o histórico de transações não é recuperado.
     * @param path Caminho.
     * @return Promessa de `CustomerDiscountStatement`.
     */
    query(path: 'Customer/Discount/FidelityPoints'): Promise<CustomerDiscountStatement>;
    /**
     * Recupera coleção de `CustomerShippingAddress`.
     * @param path Caminho.
     * @param options
     * @return Promessa de `CustomerShippingAddress`.
     */
    query(path: 'Customer/ShippingAddress', options: {
        id: number;
    }): Promise<CustomerShippingAddress>;
    /**
     * Recupera informações de estado do cliente.
     * @param path Caminho.
     * @return Promessa de `CustomerState`.
     */
    query(path: 'Customer/State'): Promise<CustomerState>;
    /**
     * Recupera formas de pagamento disponíveis.
     * @param path Caminho.
     * @return Promessa de coleção de `PaymentGroup`.
     */
    query(path: 'Payment/Group'): Promise<PaymentGroup[]>;
    /**
     * Recupera `Paginate` com coleção de `Product`.
     * @param path Caminho
     * @param options Filtros.
     * @return Promessa de `Paginate`.
     */
    query(path: 'Product/Catalog', options: {
        category?: string[];
        filter?: string[];
        search?: string;
        sort?: 'releaseDate' | 'salesAmount' | 'random' | 'relevance';
        limit?: number;
        page?: number;
    }): Promise<Paginate>;
    /**
     * Recupera coleção de `ProductFacet`.
     * @param path Caminho.
     * @param options Filtros.
     * @return Promessa de coleção de `ProductFacet`.
     */
    query(path: 'Product/Facet', options: {
        category?: string[];
        filter?: string[];
        search?: string;
    }): Promise<ProductFacet[]>;
    /**
     * Recupera preços dos produtos.
     * @param path Caminho.
     * @param options Paths dos produtos.
     * @return Promessa de coleção de `ProductPrice`.
     */
    query(path: 'Product/Price', options: {
        paths: string[];
    }): Promise<Dictionary<ProductPrice>>;
    /**
     * Recupera a disponibilidade para venda dos produtos.
     * @param path Caminho.
     * @param options Paths dos produtos.
     * @return Promessa de coleção de `boolean`.
     */
    query(path: 'Product/Available', options: {
        paths: string[];
    }): Promise<Dictionary<boolean>>;
    /**
     * Recupera endereço de um determinado código postal.
     * @param path Caminho.
     * @param options Código postal e país.
     * @return Promessa de `PostalCodeAddress`.
     */
    query(path: 'PostalCodeAddress', options: {
        postalCode: string;
        country: string;
    }): Promise<PostalCodeAddress>;
    /**
     * Recupera coleção de `StaticPage`.
     * @param path Caminho.
     * @param options Filtros.
     * @return Promessa de coleção de `StaticPage`.
     */
    query(path: 'StaticPage', options: {
        type?: string;
        identifier?: string;
        featured?: boolean;
        limit?: number;
    }): Promise<StaticPage[]>;
    /**
     * Realiza ações na loja, como cadastrar um cliente, adicionar produtos ao carrinho, realizar login, entre outros.
     * @param path - Caminho do comando.
     * @param data - Parâmetros específicos a serem anexados ao corpo da requisição.
     */
    command(path: string, data: any): Promise<null | JQueryXHR>;
    /**
     * Recupera os fontes das imagens para os identificadores especificados.
     * @param identifiers Nomes dos métodos de pagamento (Boleto Bancário, Banco do Brasil, Mastercard, etc...). cada nome pode ser sucedido por '/$var', onde $var é a variação da imagem.
     * @return Promessa de dicionário de strings na forma de protocolo 'data'.
     */
    loadSrcForPaymentMethods(identifiers: string[]): Promise<Dictionary<string>>;
    /**
     * Formata a URL, descapitalizando as partes separadas por '/'.
     * @param url URL a ser formatada
     * @return A URL formatada.
     */
    private static formatURLToAPI(url);
    /**
     * Monta a query que será concatenada na URL ao efetuar a requisição.
     * @param options - Opções a serem montadas.
     * @return Query montada.
     */
    private static assembleQueryOptions(options);
    /**
     * Envia uma requisição para `MooFramework.url.api`.
     * @param method - Método da requisição.
     * @param pathList - Parâmetros a serem concatenados no final (usando '/' como delimitador). Nenhum item do array pode ser nulo.
     * @param bodyData - Dados a serem anexados ao corpo da requisição (POST/PUT...)
     * @param completionHandler - Manipulador de finalização. Não pode ser nulo.
     * @throws {Error} Nenhum item do array pode ser nulo, assim como o callback de finalização.
     */
    private sendRequest(method, pathList, bodyData, completionHandler);
    /**
     * Efetua uma requisição GET para `MooFramework.url.api`.
     * @param pathList - Parâmetros a serem concatenados no final (usando '/' como delimitador). Nenhum item do array pode ser nulo.
     * @param completionHandler - Manipulador de finalização. Não pode ser nulo.
     */
    private get(pathList, completionHandler);
    /**
     * Efetua uma requisição POST para `MooFramework.url.api`.
     * @param pathList - Parâmetros a serem concatenados no final (usando '/' como delimitador). Nenhum item do array pode ser nulo.
     * @param data - Dados a serem anexados ao corpo da requisição.
     * @param completionHandler - Manipulador de finalização. Não pode ser nulo.
     */
    private post(pathList, data, completionHandler);
    /**
     * Efetua uma requisição PUT para `MooFramework.url.api`.
     * @param pathList - Parâmetros a serem concatenados no final (usando '/' como delimitador). Nenhum item do array pode ser nulo.
     * @param data - Dados a serem anexados ao corpo da requisição.
     * @param completionHandler - Manipulador de finalização. Não pode ser nulo.
     */
    private put(pathList, data, completionHandler);
    /**
     * Efetua uma requisição DELETE para `MooFramework.url.api`
     * @param pathList - Parâmetros a serem concatenados no final (usando '/' como delimitador). Nenhum item do array pode ser nulo.
     * @param completionHandler - Manipulador de finalização. Não pode ser nulo.
     */
    private delete(pathList, completionHandler);
}
