// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.0.2-alpha.3 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/example.proto (package docs, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message docs.Example
 */
export class Example extends Message<Example> {
  /**
   * @generated from field: string foo = 1;
   */
  foo = "";

  /**
   * @generated from field: bool bar = 2;
   */
  bar = false;

  /**
   * @generated from field: docs.Example baz = 3;
   */
  baz?: Example;

  constructor(data?: PartialMessage<Example>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "docs.Example";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bar", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "baz", kind: "message", T: Example },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Example {
    return new Example().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Example {
    return new Example().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Example {
    return new Example().fromJsonString(jsonString, options);
  }

  static equals(a: Example | PlainMessage<Example> | undefined, b: Example | PlainMessage<Example> | undefined): boolean {
    return proto3.util.equals(Example, a, b);
  }
}

