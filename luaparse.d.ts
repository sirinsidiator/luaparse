module "luaparse" {
    type LuaParseOptionsVersion = "5.1" | "5.2" | "5.3" | "LuaJIT" | "HavokScript5.1";

    interface LuaParseOptions {
        /**
         * Explicitly tell the parser when the input ends.
         * 
         * @default false
         */
        wait?: boolean;

        /**
         * Store comments as an array in the chunk object.
         * 
         * @default true
         */
        comments?: boolean;

        /**
         * Track identifier scopes by adding an isLocal attribute to each
         * identifier-node.
         * 
         * @default false
         */
        scope?: boolean;

        /**
         * Store location information on each syntax node as
         * `loc: { start: { line, column }, end: { line, column } }`.
         * 
         * @default false
         */
        locations?: boolean;

        /**
         * Store the start and end character locations on each syntax node as
         * `range: [start, end]`.
         * 
         * @default false
         */
        ranges?: boolean;

        /**
         * A callback which will be invoked when a syntax node has been completed.
         * The node which has been created will be passed as the only parameter.
         * 
         * @default null
         */
        onCreateNode?: Function;

        /**
         * A callback which will be invoked when a new scope is created.
         * 
         * @default null
         */
        onCreateScope?: Function;

        /**
         * A callback which will be invoked when the current scope is destroyed.
         * 
         * @default null
         */
        onDestroyScope?: Function;

        /**
         * A callback which will be invoked when a local variable is declared in the current scope.
         * The variable's name will be passed as the only parameter
         * 
         * @default null
         */
        onLocalDeclaration?: Function;

        /**
         * The version of Lua targeted by the parser (string; allowed values are
         * '5.1', '5.2', '5.3', 'LuaJIT', 'HavokScript5.1').
         * 
         * @default '5.1'
         */
        luaVersion?: LuaParseOptionsVersion;

        /**
         * Whether to allow code points outside the Basic Latin block in identifiers
         * 
         * @default false
         */
        extendedIdentifiers?: boolean;
    }

    export function parse(code: string, options?: LuaParseOptions): LuaChunk;

    type LuaLabelStatementType = "LabelStatement";
    type LuaBreakStatementType = "BreakStatement";
    type LuaGotoStatementType = "GotoStatement";
    type LuaReturnStatementType = "ReturnStatement";
    type LuaIfStatementType = "IfStatement";
    type LuaIfClauseType = "IfClause";
    type LuaElseIfClauseType = "ElseifClause";
    type LuaElseClauseType = "ElseClause";
    type LuaWhileStatementType = "WhileStatement";
    type LuaDoStatementType = "DoStatement";
    type LuaRepeatStatementType = "RepeatStatement";
    type LuaLocalStatementType = "LocalStatement";
    type LuaAssignmentStatementType = "AssignmentStatement";
    type LuaCallStatementType = "CallStatement";
    type LuaFunctionDeclarationType = "FunctionDeclaration";
    type LuaForNumericStatementType = "ForNumericStatement";
    type LuaForGenericStatementType = "ForGenericStatement";
    type LuaChunkType = "Chunk";
    type LuaIdentifierType = "Identifier";
    type LuaStringLiteralType = "StringLiteral";
    type LuaNumericLiteralType = "NumericLiteral";
    type LuaBooleanLiteralType = "BooleanLiteral";
    type LuaNilLiteralType = "NilLiteral";
    type LuaVarargLiteralType = "VarargLiteral";
    type LuaLiteralType = LuaStringLiteralType | LuaNumericLiteralType | LuaBooleanLiteralType | LuaNilLiteralType | LuaVarargLiteralType;
    type LuaTableKeyType = "TableKey";
    type LuaTableKeyStringType = "TableKeyString";
    type LuaTableValueType = "TableValue";
    type LuaTableConstructorExpressionType = "TableConstructorExpression";
    type LuaLogicalExpressionType = "LogicalExpression";
    type LuaBinaryExpressionType = "BinaryExpression";
    type LuaBinaryExpressionOperatorType = LuaLogicalExpressionType | LuaBinaryExpressionType;
    type LuaUnaryExpressionType = "UnaryExpression";
    type LuaMemberExpressionType = "MemberExpression";
    type LuaIndexExpressionType = "IndexExpression";
    type LuaCallExpressionType = "CallExpression";
    type LuaTableCallExpressionType = "TableCallExpression";
    type LuaStringCallExpressionType = "StringCallExpression";
    type LuaCommentType = "Comment";
    type LuaTypedIdentifierType = "TypedIdentifier";
    type LuaHstructureDeclarationExpressionType = "HstructureDeclarationExpression";
    type LuaHstructureEntryType = "HstructureEntry";
    type LuaHmakeConstructorExpressionType = "HmakeConstructorExpression";
    type LuaHmakeValueType = "HmakeValue";

    type LuaAstNodeType = LuaLabelStatementType | LuaBreakStatementType | LuaGotoStatementType | LuaReturnStatementType | LuaIfStatementType | LuaIfClauseType
        | LuaElseIfClauseType | LuaElseClauseType | LuaWhileStatementType | LuaDoStatementType | LuaRepeatStatementType | LuaLocalStatementType | LuaAssignmentStatementType
        | LuaCallStatementType | LuaFunctionDeclarationType | LuaForNumericStatementType | LuaForGenericStatementType | LuaChunkType | LuaIdentifierType | LuaLiteralType
        | LuaTableKeyType | LuaTableKeyStringType | LuaTableValueType | LuaTableConstructorExpressionType | LuaBinaryExpressionOperatorType | LuaUnaryExpressionType
        | LuaMemberExpressionType | LuaIndexExpressionType | LuaCallExpressionType | LuaTableCallExpressionType | LuaStringCallExpressionType | LuaCommentType
        | LuaTypedIdentifierType | LuaHstructureDeclarationExpressionType | LuaHstructureEntryType | LuaHmakeConstructorExpressionType | LuaHmakeValueType;

    type LuaEOFTokenType = 1;
    type LuaStringLiteralTokenType = 2;
    type LuaKeywordTokenType = 4;
    type LuaIdentifierTokenType = 8;
    type LuaNumericLiteralTokenType = 16;
    type LuaPunctuatorTokenType = 32;
    type LuaBooleanLiteralTokenType = 64;
    type LuaNilLiteralTokenType = 128;
    type LuaVarargLiteralTokenType = 256;

    type LuaTokenType = LuaEOFTokenType | LuaStringLiteralTokenType | LuaKeywordTokenType | LuaIdentifierTokenType | LuaNumericLiteralTokenType
        | LuaPunctuatorTokenType | LuaBooleanLiteralTokenType | LuaNilLiteralTokenType | LuaVarargLiteralTokenType;

    interface LuaToken {
        type: LuaTokenType;
        value: any;
        line: number;
        lineStart: number;
        range: [number, number];
    }

    interface LuaLocationMarkerPosition {
        line: number;
        column: number;
    }

    interface LuaLocationMarker {
        start: LuaLocationMarkerPosition;
        end: LuaLocationMarkerPosition;
    }

    interface LuaPunctuatorToken extends LuaToken {
        type: LuaPunctuatorTokenType;
    }

    interface LuaAstNode {
        type: LuaAstNodeType;
        isLocal?: boolean;
        loc?: LuaLocationMarker;
        range?: [number, number];
    }

    interface LuaLabelStatement extends LuaAstNode {
        type: LuaLabelStatementType;
        label: LuaIdentifier;
    }

    interface LuaBreakStatement extends LuaAstNode {
        type: LuaBreakStatementType;
    }

    interface LuaGotoStatement extends LuaAstNode {
        type: LuaGotoStatementType;
        label: LuaIdentifier;
    }

    interface LuaReturnStatement extends LuaAstNode {
        type: LuaReturnStatementType;
        arguments: LuaAstNode[];
    }

    interface LuaIfStatement extends LuaAstNode {
        type: LuaIfStatementType;
        clauses: LuaAstNode[];
    }

    interface LuaIfClause extends LuaAstNode {
        type: LuaIfClauseType;
        condition: LuaAstNode;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaElseIfClause extends LuaAstNode {
        type: LuaElseIfClauseType;
        condition: LuaAstNode;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaElseClause extends LuaAstNode {
        type: LuaElseClauseType;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaWhileStatement extends LuaAstNode {
        type: LuaWhileStatementType;
        condition: LuaAstNode;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaDoStatement extends LuaAstNode {
        type: LuaDoStatementType;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaRepeatStatement extends LuaAstNode {
        type: LuaRepeatStatementType;
        condition: LuaAstNode;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaLocalStatement extends LuaAstNode {
        type: LuaLocalStatementType;
        variables: (LuaIdentifier | LuaTypedIdentifier | LuaMemberExpression)[];
        init: LuaAstNode[];
    }

    interface LuaAssignmentStatement extends LuaAstNode {
        type: LuaAssignmentStatementType;
        variables: LuaAstNode[];
        init: LuaAstNode[];
    }

    interface LuaCallStatement extends LuaAstNode {
        type: LuaCallStatementType;
        expression: LuaAstNode;
    }

    interface LuaFunctionStatement extends LuaAstNode {
        type: LuaFunctionDeclarationType;
        identifier: LuaIdentifier | LuaMemberExpression;
        isLocal: boolean;
        parameters: (LuaIdentifier | LuaTypedIdentifier | LuaLiteral)[];
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaForNumericStatement extends LuaAstNode {
        type: LuaForNumericStatementType;
        variable: LuaIdentifier;
        start: LuaAstNode;
        end: LuaAstNode;
        step: LuaAstNode | null;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaForGenericStatement extends LuaAstNode {
        type: LuaForGenericStatementType;
        variables: LuaIdentifier[];
        iterators: LuaAstNode[];
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
    }

    interface LuaChunk extends LuaAstNode {
        type: LuaChunkType;
        body: LuaAstNode[];
        scope?: { name: string, node: LuaIdentifier }[];
        comment?: LuaComment[];
        globals?: LuaIdentifier[];
    }

    interface LuaIdentifier extends LuaAstNode {
        type: LuaIdentifierType;
        name: string;
    }

    interface LuaLiteral extends LuaAstNode {
        type: LuaLiteralType;
        value: string;
        raw: string;
    }

    interface LuaTableKey extends LuaAstNode {
        type: LuaTableKeyType;
        key: LuaAstNode;
        value: LuaAstNode;
    }

    interface LuaTableKeyString extends LuaAstNode {
        type: LuaTableKeyStringType;
        key: LuaIdentifier;
        value: LuaAstNode;
    }

    interface LuaTableValue extends LuaAstNode {
        type: LuaTableValueType;
        value: LuaAstNode;
    }

    interface LuaTableConstructorExpression extends LuaAstNode {
        type: LuaTableConstructorExpressionType;
        fields: LuaAstNode[];
    }

    interface LuaBinaryExpression extends LuaAstNode {
        type: LuaBinaryExpressionType;
        operator: string;
        left: LuaAstNode;
        right: LuaAstNode;
    }

    interface LuaUnaryExpression extends LuaAstNode {
        type: LuaUnaryExpressionType;
        operator: string;
        argument: LuaAstNode;
    }

    interface LuaMemberExpression extends LuaAstNode {
        type: LuaMemberExpressionType;
        indexer: string;
        identifier: LuaIdentifier;
        base: LuaAstNode;
    }

    interface LuaIndexExpression extends LuaAstNode {
        type: LuaIndexExpressionType;
        base: LuaAstNode;
        index: LuaAstNode;
    }

    interface LuaCallExpression extends LuaAstNode {
        type: LuaCallExpressionType;
        base: LuaAstNode;
        arguments: LuaAstNode[];
    }

    interface LuaTableCallExpression extends LuaAstNode {
        type: LuaTableCallExpressionType;
        base: LuaAstNode;
        arguments: LuaTableConstructorExpression;
    }

    interface LuaStringCallExpression extends LuaAstNode {
        type: LuaStringCallExpressionType;
        base: LuaAstNode;
        argument: LuaAstNode;
    }

    interface LuaComment extends LuaAstNode {
        value: string;
        raw: string;
    }

    interface LuaTypedIdentifier extends LuaAstNode {
        type: LuaTypedIdentifierType;
        name: LuaIdentifier;
        dataType: LuaIdentifier;
    }

    interface LuaHstructureDeclarationExpression extends LuaAstNode {
        type: LuaHstructureDeclarationExpressionType;
        name: LuaIdentifier;
        fields: LuaAstNode[];
    }

    interface LuaHstructureEntry extends LuaAstNode {
        type: LuaHstructureEntryType;
        key: LuaIdentifier;
        dataType: LuaIdentifier;
    }

    interface LuaHmakeConstructorExpression extends LuaAstNode {
        type: LuaHmakeConstructorExpressionType;
        dataType: LuaIdentifier;
        fields: LuaHmakeValue[];
    }

    interface LuaHmakeValue extends LuaAstNode {
        type: LuaHmakeValueType;
        key: LuaIdentifier;
        value: LuaAstNode;
    }
}