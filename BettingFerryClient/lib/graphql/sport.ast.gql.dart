// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:gql/ast.dart' as _i1;

const FetchSports = _i1.OperationDefinitionNode(
    type: _i1.OperationType.query,
    name: _i1.NameNode(value: 'FetchSports'),
    variableDefinitions: [],
    directives: [],
    selectionSet: _i1.SelectionSetNode(selections: [
      _i1.FieldNode(
          name: _i1.NameNode(value: 'sports'),
          alias: null,
          arguments: [],
          directives: [],
          selectionSet: _i1.SelectionSetNode(selections: [
            _i1.FieldNode(
                name: _i1.NameNode(value: '_id'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null),
            _i1.FieldNode(
                name: _i1.NameNode(value: 'id'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null),
            _i1.FieldNode(
                name: _i1.NameNode(value: 'name'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null),
            _i1.FieldNode(
                name: _i1.NameNode(value: 'order'),
                alias: null,
                arguments: [],
                directives: [],
                selectionSet: null)
          ]))
    ]));
const document = _i1.DocumentNode(definitions: [FetchSports]);