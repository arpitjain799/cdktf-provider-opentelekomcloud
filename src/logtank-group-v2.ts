// https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtankGroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2.html#group_name LogtankGroupV2#group_name}
  */
  readonly groupName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2.html opentelekomcloud_logtank_group_v2}
*/
export class LogtankGroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_logtank_group_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/logtank_group_v2.html opentelekomcloud_logtank_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtankGroupV2Config
  */
  public constructor(scope: Construct, id: string, config: LogtankGroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_logtank_group_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupName = config.groupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ttl_in_days - computed: true, optional: false, required: false
  public get ttlInDays() {
    return this.getNumberAttribute('ttl_in_days');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
    };
  }
}
