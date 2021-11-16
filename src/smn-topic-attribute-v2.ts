// https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmnTopicAttributeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html#attribute_name SmnTopicAttributeV2#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html#topic_attribute SmnTopicAttributeV2#topic_attribute}
  */
  readonly topicAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html#topic_urn SmnTopicAttributeV2#topic_urn}
  */
  readonly topicUrn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html opentelekomcloud_smn_topic_attribute_v2}
*/
export class SmnTopicAttributeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_smn_topic_attribute_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_attribute_v2.html opentelekomcloud_smn_topic_attribute_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmnTopicAttributeV2Config
  */
  public constructor(scope: Construct, id: string, config: SmnTopicAttributeV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_smn_topic_attribute_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributeName = config.attributeName;
    this._topicAttribute = config.topicAttribute;
    this._topicUrn = config.topicUrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // topic_attribute - computed: false, optional: false, required: true
  private _topicAttribute?: string; 
  public get topicAttribute() {
    return this.getStringAttribute('topic_attribute');
  }
  public set topicAttribute(value: string) {
    this._topicAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicAttributeInput() {
    return this._topicAttribute
  }

  // topic_urn - computed: false, optional: false, required: true
  private _topicUrn?: string; 
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }
  public set topicUrn(value: string) {
    this._topicUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicUrnInput() {
    return this._topicUrn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      topic_attribute: cdktf.stringToTerraform(this._topicAttribute),
      topic_urn: cdktf.stringToTerraform(this._topicUrn),
    };
  }
}
