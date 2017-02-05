/*
 * Xbasic Binary operators, and thier weights
 */
var binaryOps = [
    { "op": "**", "weight": 9 },
    { "op": "^", "weight": 9 },
    { "op": "+", "weight": 7 },
    { "op": "-", "weight": 7 },
    { "op": "*", "weight": 8 },
    { "op": "/", "weight": 8 },
    { "op": "$$", "weight": 8 },
    { "op": "$", "weight": 8 },
    { "op": "!$", "weight": 8 },
    { "op": "<>", "weight": 4 },
    { "op": "!=", "weight": 4 },
    { "op": "<=", "weight": 5 },
    { "op": ".le.", "weight": 5 },
    { "op": ">=", "weight": 5 },
    { "op": ".ge.", "weight": 5 },
    { "op": "<", "weight": 5 },
    { "op": ".lt.", "weight": 5 },
    { "op": ">", "weight": 5 },
    { "op": ".gt.", "weight": 5 },
    { "op": "==", "weight": 4 },
    { "op": "=", "weight": 4 },
    { "op": ".and.", "weight": 3 },
    { "op": ".or.", "weight": 2 },
    { "op": ".xor.", "weight": 3 },
    { "op": "..", "weight": 2 },
    { "op": ":=", "weight": 1 },
    { "op": ".eq.", "weight": 4 },
    { "op": ".ne.", "weight": 4 },
    { "op": ".", "weight": 11 }
];

/*
 * Xbasic unary operators, and thier weights
 */
var unaryOps = [
    { "op": "+", "weight": 10 },
    { "op": "-", "weight": 10 },
    { "op": ".not.", "weight": 10 }
];
/*
 * Templates for Xbasic commands
 */
var xbasicCommands = [
    { "name": "define_class", "template": ["define", "class", ["$attr"], ["$xor", ["shared", "global", "system"]], ["$exp", "class"], ["inherits", ["$attr"], ["$exp", "inherits"]]] },
    { "name": "case_else", "template": ["case", "else"] },
    { "name": "case", "template": ["case", ["$exp", "expr"]] },
    { "name": "constant", "template": ["constant", ["$xor", ["shared", "global", "system", "private"]], ["$var", "const"], "=", ["$exp", "expr"]] },
    { "name": "continue", "template": ["continue"] },
    { "name": "declare", "template": ["declare", "<sco>", "<sco>", "<sco>", "@"] },
    { "name": "declarestruct", "template": ["declarestruct", "<sco>", "<sco>"] },
    { "name": "delete", "template": ["delete", ["$attr"], ["$xor", ["shared", "global", "system", "private", "constant"]], ["$arg", "arg"]] },
    { "name": "dim", "template": ["dim", ["$attr"], ["$xor", ["shared", "global", "system", "private", "protected"]], ["$arg", "arg"]] },
    { "name": "end_class", "template": ["end", "class"] },
    { "name": "end_function", "template": ["end", "function"] },
    { "name": "end_if", "template": ["end", "if"] },
    { "name": "end_select", "template": ["end", "select"] },
    { "name": "end_while", "template": ["end", "while"] },
    { "name": "end_with", "template": ["end", "with"] },
    { "name": "end_immed", "template": ["end", "immed"] },
    { "name": "else_if", "template": ["elseif", ["$exp", "expr"], ["then"]] },
    { "name": "else_if", "template": ["else", "if", ["$exp", "expr"], ["then"]] },
    { "name": "else", "template": ["else"] },
    { "name": "exit_for", "template": ["exit", "for"] },
    { "name": "exit_function", "template": ["exit", "function"] },
    { "name": "exit_while", "template": ["exit", "while"] },
    { "name": "for_each", "template": ["for", "each", ["$var", "iterator"], "in", ["$exp", "list"]] },
    { "name": "for", "template": ["for", ["$var", "iterator"], "=", ["$exp", "iter"], "to", ["$exp", "end"], ["step", ["$exp", "step"]]] },
    { "name": "function", "template": ["function", ["$attr"], ["$or", ["background", "private", "event", "protected", "shared", "global", "system"]], ["$arg", "arg"], "(", ["$many", [["$arg", "arg"]], ","], ")"] },
    { "name": "if", "template": ["if", ["$exp", "expr"], ["then"]] },
    { "name": "dynamic_include", "template": ["dynamic", "include", ["$exp", "include"]] },
    { "name": "goto", "template": ["goto", "<sym>"] },
    { "name": "let", "template": ["let", ["$var", "variable"], "=", ["$exp", "expr"]] },
    { "name": "next", "template": ["next",["$var","identifier"]] },
    { "name": "next", "template": ["next"] },
    { "name": "on_error_goto", "template": ["on", "error", "goto", "<sym>"] },
    { "name": "on_error_resume", "template": ["on", "error", "resume", "<sym>"] },
    { "name": "option", "template": ["option", ["$or", ["relax", "strict", "break", "nobreak", "blocking", "non_blocking", "plaintext_tokens", "encrypted_tokens", "dynamic_var", "fixed_var", "__a5v11class__", "__a5v10class__", "__novartoclass__", "__vartoclass__"]]] },
    { "name": "redim", "template": ["redim", ["$attr"], ["$xor", ["shared", "global", "system", "private", "protected"]], ["$arg", "arg"]] },
    { "name": "resume", "template": ["resume", "<sym>"] },
    { "name": "return", "template": ["return"] },
    { "name": "select", "template": ["select"] },
    { "name": "stop", "template": ["stop"] },
    { "name": "undeclare", "template": ["undeclare"] },
    { "name": "end_while", "template": ["wend"] },
    { "name": "while", "template": ["while", ["$exp", "expr"]] },
    { "name": "with", "template": ["with", ["$exp", "expr"]] },
    { "name": "macro", "template": ["macro", ["$xor", ["shared", "global", "system"]], ["$exp", "macro"], "as", ["$exp", "implementation"]] },
    { "name": "import_package", "template": ["import", "package", "<sco>"] },
    { "name": "import_types", "template": ["import", "types", ["$exp", "types"]] },
    { "name": "read_input", "template": ["read", "input", ["$var", "variable"], ["from", ["$exp", "expr"]]] },
    { "name": "a5winclude", "template": ["a5winclude", ["$exp", "reference"]] },
    { "name": "output", "template": ["write", "output", ["$exp", "expr"], ["to", ["$exp", "output"]]] },
    { "name": "yield_control", "template": ["yield", "control"] },
    { "name": "end", "template": ["end"] },
    { "name": "expr", "template": [["$exp", "expr"]] }

];

// index for operator weight lookup
var binaryOpIndex = null;

var isAlphaNumeric = function (code) {
    if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
        return true;
    }
    return false;
};

var isIdentChar = function (code) {
    if (isAlphaNumeric(code)) {
        return true;
    }
    if (code === 95) {
        return true;
    }
    return false;
};


var parseXbasic = function (source) {
    var i, line;
    var commands = [];
    var errors = [];
    var dotVal = 46;
    if (!binaryOpIndex) {
        // Build binary weight index
        binaryOpIndex = {};
        for (i = 0; i < binaryOps.length; ++i) {
            binaryOpIndex[binaryOps[i].op] = binaryOps[i].weight;
        }
    }
    //----------- Return numeric constant variable length
    var numericLength = function (line) {
        var optLead = 0;
        if (line.charCodeAt(0) === 45) {
            ++optLead;
        }
        if (line.charCodeAt(optLead) === dotVal) {
            ++optLead;
            dotVal = -1;
        }
        var code = line.charCodeAt(optLead);
        if (code > 47 && code < 58) {
            line += "|";
            ++optLead;
            code = line.charCodeAt(optLead);
            while (code > 47 && code < 58 || code === dotVal) {
                ++optLead;
                code = line.charCodeAt(optLead);
            }
            return optLead;
        }
        return 0;
    };
    //--------- Return logical length
    var boolLength = function (line) {
        var testBool = line.substr(0,3).toLowerCase();
        if( testBool === ".t." || testBool === ".f." ) {
            return 3;
        }
        return 0;
    };
    //--------- Return string length
    var stringLength = function (line) {
        if (line.charCodeAt(0) === 34) {
            var len = 1;
            while (len < line.length && line.charCodeAt(len) !== 34) {
                if (line.charCodeAt(len) === 92 && ((len + 1) < line.length)) {
                    ++len;
                    if (line.charCodeAt(len) === 92 || line.charCodeAt(len) === 34) {
                        ++len;
                    }
                } else {
                    ++len;
                }
            }
            if (len < line.length) {
                return len + 1;
            }
        } else if (line.substring(0,2) === "<<" ) {
            var tag = line.substring(2).split("\n")[0].trim();
            var tagEnd = line.substring(2+tag.length).indexOf(tag);
            tagEnd += 2+tag.length*2;
            return tagEnd;
        }
        return 0;
    };
    //---------- Return identifier length
    var identifierLength = function (line) {
        var code = line.charCodeAt(0);
        var len = 0;
        if (code === 42) {
            code =  line.charCodeAt(1);
            if ((code > 64 && code < 91) || (code > 96 && code < 123) || code === 95) {
                ++len;
            }
        } else if (code === 46) {
            code =  line.charCodeAt(1);
            if ((code > 64 && code < 91) || (code > 96 && code < 123) || code === 95) {
                ++len;
            }
        }
        while (code === 58) {
            ++len;
            code = line.charCodeAt(len);
        }
        if ((code > 64 && code < 91) || (code > 96 && code < 123) || code === 95) {
            ++len;
            line += "|";
            code = line.charCodeAt(len);
            while ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123) || code === 95 || code === 58) {
                ++len;
                code = line.charCodeAt(len);
            }
            return len;
        }
        return 0;
    };
    //----------- Unary operator
    var unaryOperator = function (ctx) {
        if (ctx.line.length < 1) {
            return null;
        }
        var i;
        for (i = 0; i < unaryOps.length; ++i) {
            if (ctx.line.substr(0, unaryOps[i].op.length).toLowerCase() === unaryOps[i].op) {
                ctx.line = ctx.line.substr(unaryOps[i].op.length);
                ctx.startColumn += unaryOps[i].op.length;
                return unaryOps[i];
            }
        }
        return null;
    };
    //----------- Binary operator
    var binaryOperator = function (ctx) {
        if (ctx.line.length < 1) {
            return null;
        }
        var i;
        for (i = 0; i < binaryOps.length; ++i) {
            if (ctx.line.substr(0, binaryOps[i].op.length).toLowerCase() === binaryOps[i].op) {
                ctx.line = ctx.line.substr(binaryOps[i].op.length);
                ctx.startColumn += binaryOps[i].op.length;
                return binaryOps[i];
            }
        }
        return null;
    };
    //----------- Parse an operator 
    var operatorExpr = function (ctx) {
        if (ctx.line.length < 1) {
            return null;
        }
        var length = numericLength(ctx.line);
        if (length > 0) {
            var txt = ctx.line.substr(0, length);
            ctx.line = ctx.line.substr(length);
            ctx.startColumn += length;
            return { expr: { number: txt } };
        }
        length = boolLength(ctx.line);
        if (length > 0) {
            var txt = ctx.line.substr(0, length);
            ctx.line = ctx.line.substr(length);
            ctx.startColumn += length;
            return { expr: { bool: txt } };
        }        
        length = identifierLength(ctx.line);
        if (length > 0) {
            var txt = ctx.line.substr(0, length);
            ctx.line = ctx.line.substr(length);
            ctx.startColumn += length;
            return { expr: { identifier: txt } };
        }
        length = stringLength(ctx.line);
        if (length > 0) {
            var txt = ctx.line.substr(0, length);
            ctx.line = ctx.line.substr(length);
            ctx.startColumn += length;
            return { expr: { string: txt } };
        }
        return null;
    };
    var skipWhitespace = function (ctx) {
        if (ctx.line.charCodeAt(0) <= 32) {
            ctx.startColumn += (ctx.line.length + 1) - ((ctx.line + "|").trim().length);
            ctx.line = ctx.line.trim();
        }
    };
    //----------- Parse an xbasic expression
    var checkTerminate = function (ctx) {
        if (ctx.terminateExpr) {
            var i = 0;
            for (i = 0; i < ctx.terminateExpr.length; ++i) {
                if (ctx.line.substr(0, ctx.terminateExpr[i].length).toLowerCase() === ctx.terminateExpr[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    var parseExpr = function (ctx, kind) {
        var handled = false;
        var expr = null;
        if (ctx.line.charCodeAt(0) === 40) {
            ctx.line = ctx.line.substr(1);
            ctx.startColumn += 1;
            skipWhitespace(ctx);
            var inner = parseExpr(ctx);
            if (inner.handled) {
                var parameters = null;
                if (kind === "ident") {
                    parameters = [];
                    skipWhitespace(ctx);
                    parameters.push(inner.content);
                    while (ctx.line.charCodeAt(0) === 44) {
                        ctx.line = ctx.line.substr(1);
                        ctx.startColumn += 1;
                        skipWhitespace(ctx)
                        inner = parseExpr(ctx);
                        if (inner.handled) {
                            parameters.push(inner.content);
                        }
                        skipWhitespace(ctx);
                    }
                }
                if (ctx.line.charCodeAt(0) === 41) {
                    ctx.line = ctx.line.substr(1);
                    ctx.startColumn += 1;
                    skipWhitespace(ctx);
                    handled = true;
                    if (parameters) {
                        expr = parameters;
                    } else {
                        expr = { type: "()", expr: inner.content };
                    }
                }
            } else if (kind === "ident" && ctx.line.charCodeAt(0) === 41) {
                ctx.line = ctx.line.substr(1);
                ctx.startColumn += 1;
                handled = true;
                expr = [];
            }
        } else if (ctx.line.charCodeAt(0) === 91) {
            //93
            ctx.line = ctx.line.substr(1);
            ctx.startColumn += 1;
            skipWhitespace(ctx);
            var inner = parseExpr(ctx);
            if (inner.handled) {
                var parameters = null;
                if (kind === "ident") {
                    parameters = [];
                    skipWhitespace(ctx);
                    parameters.push(inner.content);
                    while (ctx.line.charCodeAt(0) === 44) {
                        ctx.line = ctx.line.substr(1);
                        ctx.startColumn += 1;
                        skipWhitespace(ctx)
                        inner = parseExpr(ctx);
                        if (inner.handled) {
                            parameters.push(inner.content);
                        }
                        skipWhitespace(ctx);
                    }
                }
                if (ctx.line.charCodeAt(0) === 93) {
                    ctx.line = ctx.line.substr(1);
                    ctx.startColumn += 1;
                    handled = true;
                    if (parameters) {
                        expr = parameters;
                    } else {
                        expr = inner.content;
                    }
                }
            } else if (kind !== "ident" && ctx.line.charCodeAt(0) === 93) {
                ctx.line = ctx.line.substr(1);
                ctx.startColumn += 1;
                handled = true;
                skipWhitespace(ctx);
                expr = { "operator": "[]" };
            } else if (ctx.line.length > 2 && ctx.line.charCodeAt(0) === 46 && ctx.line.charCodeAt(1) === 46 && ctx.line.charCodeAt(1) === 93) {
                ctx.line = ctx.line.substr(3);
                ctx.startColumn += 3;
                handled = true;
                skipWhitespace(ctx);
                expr = { "operator": "[..]" };
            }
        } else {
            var uo = unaryOperator(ctx);
            skipWhitespace(ctx);
            var oe = operatorExpr(ctx);
            if (oe) {
                handled = true;
                expr = oe.expr;
                skipWhitespace(ctx);
                if (oe.expr.identifier) {                    
                    if (ctx.line.charCodeAt(0) === 40) {
                        var saveLine = ctx.line;
                        var inner = parseExpr(ctx, "ident");
                        if (inner.handled) {
                            expr = { function: oe.expr.identifier, parameters: inner.content };
                        } else {
                            ctx.startColumn -= (saveLine.length - ctx.line.length); 
                            ctx.line = saveLine;
                        }
                    } else if (ctx.line.charCodeAt(0) === 91) {
                        var inner = parseExpr(ctx, "ident");
                        if (inner.handled) {
                            expr = { arrayref: oe.expr.identifier, indexer: inner.content };
                        }
                    }
                }
                if (uo) {
                    expr = { type: uo.op, operator: [expr] };
                }
                if (!checkTerminate(ctx)) {
                    var saveLine = ctx.line;
                    var binOp = binaryOperator(ctx);
                    if (binOp) {
                        if (kind !== "var" || binOp.op === '.') {
                            skipWhitespace(ctx);
                            var rightValue = parseExpr(ctx);
                            if (rightValue.handled) {
                                expr = { type: binOp.op, operator: [expr, rightValue.content] };
                                // Flatten same operators
                                if (binOp.op === '.') {
                                    if (rightValue.content.type === '.') {
                                        expr = { type: binOp.op, operator: [expr.operator].concat(rightValue.content.operator) };
                                    }
                                }
                            } else {
                                ctx.startColumn -= (saveLine.length - ctx.line.length); 
                                ctx.line = saveLine;
                            }
                        } else {
                            ctx.startColumn -= (saveLine.length - ctx.line.length); 
                            ctx.line = saveLine;
                        }
                    }
                }
            }
        }
        return { handled: handled, content: expr };
    };
    //----------- Make variable reference expression simpler...
    var simplifyVariableReference = function (expr) {
        if (expr.content.identifier) {
            expr.content = expr.content.identifier;
            return true;
        } else if (expr.content.type === '.') {
            var i , j;
            var methodPtr = null;
            var replaceItem = [];
            for (i = 0; i < expr.content.operator.length; ++i) {
                if ( expr.content.operator[i].identifier ) {
                    replaceItem.push(expr.content.operator[i].identifier);
                } else if( expr.content.operator[i].indexer) {
                    replaceItem.push(expr.content.operator[i].arrayref);
                    replaceItem.push(expr.content.operator[i].indexer);
                 } else if( expr.content.operator[i].type === '.' ) {
                    var  childOp = { content : expr.content.operator[i] };
                    if( simplifyVariableReference(childOp)) {
                         if( childOp.isMethod ) {
                             return false;
                         } else {
                             for (j = 0; j < childOp.content.length; ++j) {
                                 replaceItem.push( childOp.content[j] )
                             }
                         }
                    }
                } else  if (i === (expr.content.operator.length - 1) && expr.content.operator[i].function) {
                    methodPtr = expr.content.operator[i];
                    replaceItem.push( methodPtr.function );
                } else {
                    return false;
                }
            }
            if (methodPtr) {
                expr.isMethod = true;
                expr.content = { method:replaceItem, parameters: methodPtr.parameters };
            } else {
                expr.content = replaceItem;
            }
            return true;
        }
        return false;
    };
    var foldExpression = function (expr) {
        if (expr.handled) {
            var rightAssoc = function (node) {
                if (node.parameters) {
                    var i;
                    for (i = 0; i < node.parameters.length; ++i) {
                        node.parameters[i] = rightAssoc(node.parameters[i]);
                    }
                }
                if (node.type) {
                    if (node.operator) {
                        var i;
                        for (i = 0; i < node.operator.length; ++i) {
                            node.operator[i] = rightAssoc(node.operator[i]);
                        }
                    }
                    if (node.operator && node.operator.length === 2) {
                        if (node.operator[0].operator) {
                            if (node.operator[0].operator.length === 1 && binaryOpIndex[node.type] > 10) {
                                // unary operator is less tightly bound - move oper UNDER the unary
                                return {
                                    type: node.operator[0].type, operator: [
                                        { type: node.type, operator: [node.operator[0].operator[0], node.operator[1]] }
                                    ]
                                };
                            }
                        }
                        if (node.operator[1].type && node.operator[1].operator) {
                            if (node.operator[1].operator.length === 2) {
                                var thisOp = binaryOpIndex[node.type];
                                var nextOp = binaryOpIndex[node.operator[1].type];
                                if (thisOp && nextOp && nextOp < thisOp) {
                                    // do a  right association                                    
                                    return {
                                        type: node.operator[1].type, operator: [
                                            { type: node.type, operator: [node.operator[0], node.operator[1].operator[0]] }
                                            , node.operator[1].operator[1]]
                                    };
                                }
                            }
                        }
                    }
                }
                return node;
            };
            var flattenVarref = function (node) {
                if (node.parameters) {
                    var i;
                    for (i = 0; i < node.parameters.length; ++i) {
                        node.parameters[i] = flattenVarref(node.parameters[i]);
                    }
                }
                if (node.type) {
                    if (node.operator) {
                        var i;
                        for (i = 0; i < node.operator.length; ++i) {
                            node.operator[i] = flattenVarref(node.operator[i]);
                        }
                    }
                    if (node.type === '.') {
                        var test = { content: node };
                        if (simplifyVariableReference(test)) {
                            if (test.isMethod) {
                                return test.content;
                            }
                            return { identifier: test.content };
                        }
                    }
                }
                return node;
            };
            expr.content = flattenVarref(rightAssoc(expr.content));
        }
        return expr;
    };
    //----------- Parse an xbasic command
    var parseArg = function(ctx,typeHash) {
        ctx.terminateExpr = ["as"];
        var expr = foldExpression(parseExpr(ctx, "var"));
        var typeName = null;
        if (!expr.handled) {
            return false;
        }
        skipWhitespace(ctx);
        if (ctx.line.substring(0, 2).toLowerCase() !== 'as') {
            if( typeHash ==="arg" ) {
                if ( ctx.line.charCodeAt(0) !== 61) {
                    return false; 
                }
                typeName = "*";
            } else {
                return false; 
            }
        } else {
            ctx.line = ctx.line.substr(2);
            ctx.startColumn += 2;
            skipWhitespace(ctx);
            var typeLength = identifierLength(ctx.line);
            if (typeLength < 1) {
                return false;
            }
            typeName = ctx.line.substr(0, typeLength);
        }
        ctx.line = ctx.line.substr(typeLength);
        ctx.startColumn += typeLength;
        simplifyVariableReference(expr);
        ctx.obj.variable = expr.content;
        ctx.obj[typeHash] = typeName;
        skipWhitespace(ctx);
        var chrCode = ctx.line.charCodeAt(0);
        if ( chrCode === 61) {
            ctx.line = ctx.line.substr(1);
            ctx.startColumn += 1;
            skipWhitespace(ctx);
            if (ctx.line.substring(0, 7).toLowerCase() === 'default' && ctx.line.charCodeAt(7) < 33) {
                ctx.line = ctx.line.substr(7);
                ctx.startColumn += 7;
                skipWhitespace(ctx);
                var initExpr = foldExpression(parseExpr(ctx));
                if (initExpr.handled) {
                    ctx.obj.default = initExpr.content;
                }
            } else {
                var initExpr = foldExpression(parseExpr(ctx));
                if (initExpr.handled) {
                    ctx.obj.initialize = initExpr.content;
                }
            }
        }
        return true;
    }
    var parseXbasicCommand = function (ctx) {
        //cmd, obj, startAt, line, lineNumber, startColumn
        var i = 0;
        var goodTo = -1;
        var resolved = false;
        var tmpl = ctx.command.template;
        for (i = ctx.startAt; i < tmpl.length; ++i) {
            var token = tmpl[i];
            skipWhitespace(ctx);
            if (typeof token === 'string') {
                if (token === "<sym>") {
                } else if (ctx.line.substring(0, token.length).toLowerCase() === token) {
                    if (isAlphaNumeric(token.charCodeAt(token.length - 1))) {
                        if (token.length < ctx.line.length) {
                            if (isIdentChar(ctx.line.charCodeAt(token.length))) {
                                break;
                            }
                        }
                    }
                    goodTo = i;
                    ctx.line = ctx.line.substr(token.length);
                    ctx.startColumn += token.length;
                    skipWhitespace(ctx);
                    // Lets compare the rest....
                } else {
                    break;
                }
            } else {
                var subexpr = token[0];
                if (subexpr === "$exp") {
                    if ((i + 1) < tmpl.length) {
                        ctx.terminateExpr = [tmpl[i + 1]];
                        if (typeof token !== 'string') {
                            ctx.terminateExpr = ctx.terminateExpr[0];
                        }
                    }
                    var expr = foldExpression(parseExpr(ctx));
                    if (!expr.handled) {
                        break;
                    }
                    ctx.obj[token[1]] = expr.content;
                    //console.log("Expr: " + JSON.stringify(expr.content));
                    goodTo = i;
                } else if (subexpr === "$var") {
                    var expr = foldExpression(parseExpr(ctx, "var"));
                    if (!expr.handled) {
                        break;
                    }
                    ctx.obj[token[1]] = expr.content;
                    //console.log("Expr: " + JSON.stringify(expr.content));
                    goodTo = i;
                } else if (subexpr === "$arg") {
                    if( ctx.command.name === "arg" ) {
                        if( !parseArg(ctx,"arg") ) {
                            break;
                        }
                    } else if( !parseArg(ctx,"function") ) {
                        break;
                    }
                    goodTo = i;
                } else if (subexpr === "$or") {
                    // TBD handle many match...
                    goodTo = i;
                } else if (subexpr === "$xor") {
                    // TBD handle any one match...
                    goodTo = i;
                } else if (subexpr === "$many") {
                    var subexpr = token[0];
                    var subCommand = { command: { name : "arg", template : token[1] } , obj: { type: null }, startAt: 0, line: ctx.line, lineNumber: ctx.lineNumber, startColumn: ctx.startColumn , isSubCommand : true };
                    var collect = [];
                    while( parseXbasicCommand(subCommand) ) {
                        collect.push(subCommand.obj);
                        ctx.line = subCommand.line;
                        ctx.lineNumber = subCommand.lineNumber;
                        ctx.startColumn = subCommand.startColumn;
                        skipWhitespace(ctx);
                        if( token[2] !== ctx.line.substring(0,token[2].length).toLowerCase() ) {
                            break;
                        }
                        ctx.line = ctx.line.substr( token[2].length );
                        ctx.startColumn +=  token[2].length;
                        skipWhitespace(ctx);
                        subCommand = { command: { name : "arg", template : token[1] } , obj: { type: null }, startAt: 0, line: ctx.line, lineNumber: ctx.lineNumber, startColumn: ctx.startColumn , isSubCommand : true };
                    }   
                    ctx.obj.arguments = [];
                    for( var j = 0 ; j < collect.length ; ++j ) {
                        var collectElem = collect[j];
                        var collectItem = { name : collectElem.variable , type : collectElem.arg };
                        ctx.obj.arguments.push( collectItem );
                    }
                    goodTo = i;
                } else if (subexpr === ctx.line.substring(0,subexpr.length).toLowerCase() ) {
                    goodTo = i;
                    ctx.line = ctx.line.substr( subexpr.length );
                    ctx.startColumn +=  subexpr.length;
                    skipWhitespace(ctx);
                } else {
                    // not matching
                    goodTo = i;
                }
            }
        }
        if (goodTo === (tmpl.length - 1)) {
            ctx.obj.type = ctx.command.name;
            if (ctx.obj.type === "expr") {
                if (ctx.obj.expr.type === '=') {
                    ctx.obj.expr.type = ":=";
                }               
            }
            ctx.obj.lineNumber = ctx.lineNumber;
            if( !ctx.isSubCommand ) {
                commands.push(ctx.obj);
            }
            return true;
        }
        return false;
    };
    var parseXbasicCommands = function (line, lineNumber, startColumn) {
        var i;
        for (i = 0; i < xbasicCommands.length; ++i) {
            var context = { command: xbasicCommands[i], obj: { type: null }, startAt: 0, line: line, lineNumber: lineNumber, startColumn: startColumn }; 
            if (parseXbasicCommand(context)) {
                if( context.line.length > 0 ) {
                    errors.push({ error : "Extra characters after expression '"+context.line.split("\n")[0]+"'" , line : context.lineNumber , column :  context.startColumn  } );
                }
                return true;
            }
        }
        return false;
    };
    var parseXbasicLine = function (line, lineNumber, startColumn) {
        if( line.trim() === "")
            return true;
        var i;
        startColumn += (line.length + 1) - ((line + "|").trim().length);
        line = line.trim();
        if (line.substr(0, 1) === "'") {
            commands.push({ "type": "comment", "text": line.substr(1), "line": lineNumber })
        } else if (line.length > 0) {
            return parseXbasicCommands(line, lineNumber, startColumn);
        }
        return true;
    };
    source = source.split("\n");
    var j , findEnd;
    for (i = 0; i < source.length; ++i) {
        if( source[i].indexOf("'") < 0 ) {
            var stringTag = source[i].indexOf("<<");
            if( stringTag >= 0 ) {
                var tagStart = source[i].substring(stringTag+2).trim();
                findEnd = -1;
                for( j = i+1 ; j <  source.length ; ++j ) {
                    if( source[j].indexOf(tagStart) >= 0 ) {
                        findEnd = j;
                        if( source[j].indexOf("'") < 0 ) {
                            stringTag = source[j].indexOf("<<");
                            if( stringTag >= 0 ) {
                                tagStart = source[j].substring(stringTag+2).trim();
                            } else {
                                break; 
                            }
                        } else {
                            break;
                        }
                    }
                }
                if( findEnd > 0 ) {
                    for( j = i+1 ; j <=  findEnd ; ++j ) {
                        source[i] += "\n"+source[j];
                        source[j] = "";
                    }
                }
            }
        }
    }
    for (i = 0; i < source.length; ++i) {
        if( !parseXbasicLine(source[i], i, 0) ) {
            errors.push( { error : "syntax error line #"+(i+1) , line : i , col : 0 });
        }
    }
    return { "error": errors , "commands": commands };
}

exports.parse = parseXbasic; 