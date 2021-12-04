// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPreciseprotectionRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#action_category WafPreciseprotectionRuleV1#action_category}
  */
  readonly actionCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#end WafPreciseprotectionRuleV1#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#name WafPreciseprotectionRuleV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#policy_id WafPreciseprotectionRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#priority WafPreciseprotectionRuleV1#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#start WafPreciseprotectionRuleV1#start}
  */
  readonly start?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#time WafPreciseprotectionRuleV1#time}
  */
  readonly time?: boolean | cdktf.IResolvable;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#conditions WafPreciseprotectionRuleV1#conditions}
  */
  readonly conditions: WafPreciseprotectionRuleV1Conditions[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#timeouts WafPreciseprotectionRuleV1#timeouts}
  */
  readonly timeouts?: WafPreciseprotectionRuleV1Timeouts;
}
export interface WafPreciseprotectionRuleV1Conditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#category WafPreciseprotectionRuleV1#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#contents WafPreciseprotectionRuleV1#contents}
  */
  readonly contents: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#index WafPreciseprotectionRuleV1#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#logic WafPreciseprotectionRuleV1#logic}
  */
  readonly logic: string;
}

export function wafPreciseprotectionRuleV1ConditionsToTerraform(struct?: WafPreciseprotectionRuleV1Conditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    contents: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contents),
    index: cdktf.stringToTerraform(struct!.index),
    logic: cdktf.stringToTerraform(struct!.logic),
  }
}

export interface WafPreciseprotectionRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#create WafPreciseprotectionRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html#delete WafPreciseprotectionRuleV1#delete}
  */
  readonly delete?: string;
}

export function wafPreciseprotectionRuleV1TimeoutsToTerraform(struct?: WafPreciseprotectionRuleV1TimeoutsOutputReference | WafPreciseprotectionRuleV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafPreciseprotectionRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafPreciseprotectionRuleV1Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPreciseprotectionRuleV1Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html opentelekomcloud_waf_preciseprotection_rule_v1}
*/
export class WafPreciseprotectionRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_preciseprotection_rule_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_preciseprotection_rule_v1.html opentelekomcloud_waf_preciseprotection_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPreciseprotectionRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafPreciseprotectionRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_preciseprotection_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionCategory = config.actionCategory;
    this._end = config.end;
    this._name = config.name;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._start = config.start;
    this._time = config.time;
    this._conditions = config.conditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_category - computed: false, optional: false, required: true
  private _actionCategory?: string; 
  public get actionCategory() {
    return this.getStringAttribute('action_category');
  }
  public set actionCategory(value: string) {
    this._actionCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCategoryInput() {
    return this._actionCategory;
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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
    return this._name;
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
    return this._policyId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // time - computed: false, optional: true, required: false
  private _time?: boolean | cdktf.IResolvable; 
  public get time() {
    return this.getBooleanAttribute('time') as any;
  }
  public set time(value: boolean | cdktf.IResolvable) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: WafPreciseprotectionRuleV1Conditions[]; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: WafPreciseprotectionRuleV1Conditions[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafPreciseprotectionRuleV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafPreciseprotectionRuleV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_category: cdktf.stringToTerraform(this._actionCategory),
      end: cdktf.stringToTerraform(this._end),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      start: cdktf.stringToTerraform(this._start),
      time: cdktf.booleanToTerraform(this._time),
      conditions: cdktf.listMapper(wafPreciseprotectionRuleV1ConditionsToTerraform)(this._conditions),
      timeouts: wafPreciseprotectionRuleV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
