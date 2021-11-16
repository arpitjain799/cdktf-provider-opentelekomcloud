// https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmnTopicV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html#display_name SmnTopicV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html#name SmnTopicV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html#project_name SmnTopicV2#project_name}
  */
  readonly projectName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html opentelekomcloud_smn_topic_v2}
*/
export class SmnTopicV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_smn_topic_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/smn_topic_v2.html opentelekomcloud_smn_topic_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmnTopicV2Config
  */
  public constructor(scope: Construct, id: string, config: SmnTopicV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_smn_topic_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._name = config.name;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string | undefined; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string | undefined) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
  }

  // push_policy - computed: true, optional: false, required: false
  public get pushPolicy() {
    return this.getNumberAttribute('push_policy');
  }

  // topic_urn - computed: true, optional: false, required: false
  public get topicUrn() {
    return this.getStringAttribute('topic_urn');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }
}
