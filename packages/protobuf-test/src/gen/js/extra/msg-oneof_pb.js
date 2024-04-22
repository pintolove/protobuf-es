// Copyright 2021-2024 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v1.9.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/msg-oneof.proto (package spec, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.OneofEnum
 */
export const OneofEnum = /*@__PURE__*/ proto3.makeEnum(
  "spec.OneofEnum",
  [
    {no: 0, name: "ONEOF_ENUM_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ONEOF_ENUM_A", localName: "A"},
    {no: 2, name: "ONEOF_ENUM_B", localName: "B"},
  ],
);

/**
 * @generated from message spec.OneofMessage
 */
export const OneofMessage = /*@__PURE__*/ proto3.makeMessageType(
  "spec.OneofMessage",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "scalar" },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "scalar" },
    { no: 3, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "scalar" },
    { no: 11, name: "foo", kind: "message", T: OneofMessageFoo, oneof: "message" },
    { no: 12, name: "bar", kind: "message", T: OneofMessageBar, oneof: "message" },
    { no: 13, name: "baz", kind: "message", T: OneofMessageBar, oneof: "message" },
    { no: 21, name: "e", kind: "enum", T: proto3.getEnumType(OneofEnum), oneof: "enum" },
  ],
);

/**
 * @generated from message spec.OneofMessageFoo
 */
export const OneofMessageFoo = /*@__PURE__*/ proto3.makeMessageType(
  "spec.OneofMessageFoo",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "toggle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message spec.OneofMessageBar
 */
export const OneofMessageBar = /*@__PURE__*/ proto3.makeMessageType(
  "spec.OneofMessageBar",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

