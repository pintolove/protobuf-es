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

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_features.proto (package pb, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, Extension, FeatureSet, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum pb.EnumFeature
 */
export declare enum EnumFeature {
  /**
   * @generated from enum value: TEST_ENUM_FEATURE_UNKNOWN = 0;
   */
  TEST_ENUM_FEATURE_UNKNOWN = 0,

  /**
   * @generated from enum value: VALUE1 = 1;
   */
  VALUE1 = 1,

  /**
   * @generated from enum value: VALUE2 = 2;
   */
  VALUE2 = 2,

  /**
   * @generated from enum value: VALUE3 = 3;
   */
  VALUE3 = 3,

  /**
   * @generated from enum value: VALUE4 = 4;
   */
  VALUE4 = 4,

  /**
   * @generated from enum value: VALUE5 = 5;
   */
  VALUE5 = 5,

  /**
   * @generated from enum value: VALUE6 = 6;
   */
  VALUE6 = 6,

  /**
   * @generated from enum value: VALUE7 = 7;
   */
  VALUE7 = 7,

  /**
   * @generated from enum value: VALUE8 = 8;
   */
  VALUE8 = 8,

  /**
   * @generated from enum value: VALUE9 = 9;
   */
  VALUE9 = 9,

  /**
   * @generated from enum value: VALUE10 = 10;
   */
  VALUE10 = 10,

  /**
   * @generated from enum value: VALUE11 = 11;
   */
  VALUE11 = 11,

  /**
   * @generated from enum value: VALUE12 = 12;
   */
  VALUE12 = 12,

  /**
   * @generated from enum value: VALUE13 = 13;
   */
  VALUE13 = 13,

  /**
   * @generated from enum value: VALUE14 = 14;
   */
  VALUE14 = 14,

  /**
   * @generated from enum value: VALUE15 = 15;
   */
  VALUE15 = 15,

  /**
   * @generated from enum value: VALUE_EMPTY_SUPPORT = 98;
   */
  VALUE_EMPTY_SUPPORT = 98,

  /**
   * @generated from enum value: VALUE_FUTURE = 99;
   */
  VALUE_FUTURE = 99,
}

/**
 * @generated from message pb.TestMessage
 */
export declare class TestMessage extends Message<TestMessage> {
  constructor(data?: PartialMessage<TestMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "pb.TestMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage;

  static equals(a: TestMessage | PlainMessage<TestMessage> | undefined, b: TestMessage | PlainMessage<TestMessage> | undefined): boolean;
}

/**
 * @generated from message pb.TestMessage.Nested
 */
export declare class TestMessage_Nested extends Message<TestMessage_Nested> {
  constructor(data?: PartialMessage<TestMessage_Nested>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "pb.TestMessage.Nested";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage_Nested;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage_Nested;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage_Nested;

  static equals(a: TestMessage_Nested | PlainMessage<TestMessage_Nested> | undefined, b: TestMessage_Nested | PlainMessage<TestMessage_Nested> | undefined): boolean;
}

/**
 * @generated from extension: optional pb.TestFeatures test_nested = 9997;
 */
export declare const TestMessage_Nested_test_nested: Extension<FeatureSet, TestFeatures>;

/**
 * @generated from extension: optional pb.TestFeatures test_message = 9998;
 */
export declare const TestMessage_test_message: Extension<FeatureSet, TestFeatures>;

/**
 * @generated from message pb.TestFeatures
 */
export declare class TestFeatures extends Message<TestFeatures> {
  /**
   * @generated from field: optional pb.EnumFeature file_feature = 1;
   */
  fileFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature extension_range_feature = 2;
   */
  extensionRangeFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature message_feature = 3;
   */
  messageFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature field_feature = 4;
   */
  fieldFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature oneof_feature = 5;
   */
  oneofFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature enum_feature = 6;
   */
  enumFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature enum_entry_feature = 7;
   */
  enumEntryFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature service_feature = 8;
   */
  serviceFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature method_feature = 9;
   */
  methodFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature multiple_feature = 10;
   */
  multipleFeature?: EnumFeature;

  /**
   * @generated from field: optional bool bool_field_feature = 11;
   */
  boolFieldFeature?: boolean;

  /**
   * @generated from field: optional pb.EnumFeature source_feature = 15;
   */
  sourceFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature source_feature2 = 16;
   */
  sourceFeature2?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature removed_feature = 17;
   */
  removedFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature future_feature = 18;
   */
  futureFeature?: EnumFeature;

  /**
   * @generated from field: optional pb.EnumFeature legacy_feature = 19;
   */
  legacyFeature?: EnumFeature;

  constructor(data?: PartialMessage<TestFeatures>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "pb.TestFeatures";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestFeatures;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestFeatures;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestFeatures;

  static equals(a: TestFeatures | PlainMessage<TestFeatures> | undefined, b: TestFeatures | PlainMessage<TestFeatures> | undefined): boolean;
}

/**
 * @generated from extension: optional pb.TestFeatures test = 9999;
 */
export declare const test: Extension<FeatureSet, TestFeatures>;

