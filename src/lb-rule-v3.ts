// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbRuleV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html#compare_type LbRuleV3#compare_type}
  */
  readonly compareType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html#policy_id LbRuleV3#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html#project_id LbRuleV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html#type LbRuleV3#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html#value LbRuleV3#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html opentelekomcloud_lb_rule_v3}
*/
export class LbRuleV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_rule_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_rule_v3.html opentelekomcloud_lb_rule_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbRuleV3Config
  */
  public constructor(scope: Construct, id: string, config: LbRuleV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_rule_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compareType = config.compareType;
    this._policyId = config.policyId;
    this._projectId = config.projectId;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_type - computed: false, optional: false, required: true
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compare_type: cdktf.stringToTerraform(this._compareType),
      policy_id: cdktf.stringToTerraform(this._policyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
