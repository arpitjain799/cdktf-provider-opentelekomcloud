// https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VbsBackupPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#frequency VbsBackupPolicyV2#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#name VbsBackupPolicyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#region VbsBackupPolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#rentention_day VbsBackupPolicyV2#rentention_day}
  */
  readonly rententionDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#rentention_num VbsBackupPolicyV2#rentention_num}
  */
  readonly rententionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#resources VbsBackupPolicyV2#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#retain_first_backup VbsBackupPolicyV2#retain_first_backup}
  */
  readonly retainFirstBackup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#start_time VbsBackupPolicyV2#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#status VbsBackupPolicyV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#week_frequency VbsBackupPolicyV2#week_frequency}
  */
  readonly weekFrequency?: string[];
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#tags VbsBackupPolicyV2#tags}
  */
  readonly tags?: VbsBackupPolicyV2Tags[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#timeouts VbsBackupPolicyV2#timeouts}
  */
  readonly timeouts?: VbsBackupPolicyV2Timeouts;
}
export interface VbsBackupPolicyV2Tags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#key VbsBackupPolicyV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#value VbsBackupPolicyV2#value}
  */
  readonly value: string;
}

function vbsBackupPolicyV2TagsToTerraform(struct?: VbsBackupPolicyV2Tags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface VbsBackupPolicyV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#create VbsBackupPolicyV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html#delete VbsBackupPolicyV2#delete}
  */
  readonly delete?: string;
}

function vbsBackupPolicyV2TimeoutsToTerraform(struct?: VbsBackupPolicyV2TimeoutsOutputReference | VbsBackupPolicyV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VbsBackupPolicyV2TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html opentelekomcloud_vbs_backup_policy_v2}
*/
export class VbsBackupPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vbs_backup_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2.html opentelekomcloud_vbs_backup_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VbsBackupPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: VbsBackupPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vbs_backup_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._frequency = config.frequency;
    this._name = config.name;
    this._region = config.region;
    this._rententionDay = config.rententionDay;
    this._rententionNum = config.rententionNum;
    this._resources = config.resources;
    this._retainFirstBackup = config.retainFirstBackup;
    this._startTime = config.startTime;
    this._status = config.status;
    this._weekFrequency = config.weekFrequency;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number | undefined; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number | undefined) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
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

  // policy_resource_count - computed: true, optional: false, required: false
  public get policyResourceCount() {
    return this.getNumberAttribute('policy_resource_count');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // rentention_day - computed: false, optional: true, required: false
  private _rententionDay?: number | undefined; 
  public get rententionDay() {
    return this.getNumberAttribute('rentention_day');
  }
  public set rententionDay(value: number | undefined) {
    this._rententionDay = value;
  }
  public resetRententionDay() {
    this._rententionDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rententionDayInput() {
    return this._rententionDay
  }

  // rentention_num - computed: false, optional: true, required: false
  private _rententionNum?: number | undefined; 
  public get rententionNum() {
    return this.getNumberAttribute('rentention_num');
  }
  public set rententionNum(value: number | undefined) {
    this._rententionNum = value;
  }
  public resetRententionNum() {
    this._rententionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rententionNumInput() {
    return this._rententionNum
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[] | undefined; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // retain_first_backup - computed: false, optional: false, required: true
  private _retainFirstBackup?: string; 
  public get retainFirstBackup() {
    return this.getStringAttribute('retain_first_backup');
  }
  public set retainFirstBackup(value: string) {
    this._retainFirstBackup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainFirstBackupInput() {
    return this._retainFirstBackup
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // week_frequency - computed: false, optional: true, required: false
  private _weekFrequency?: string[] | undefined; 
  public get weekFrequency() {
    return this.getListAttribute('week_frequency');
  }
  public set weekFrequency(value: string[] | undefined) {
    this._weekFrequency = value;
  }
  public resetWeekFrequency() {
    this._weekFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekFrequencyInput() {
    return this._weekFrequency
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: VbsBackupPolicyV2Tags[] | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: VbsBackupPolicyV2Tags[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VbsBackupPolicyV2Timeouts | undefined; 
  private __timeoutsOutput = new VbsBackupPolicyV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VbsBackupPolicyV2Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: cdktf.numberToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      rentention_day: cdktf.numberToTerraform(this._rententionDay),
      rentention_num: cdktf.numberToTerraform(this._rententionNum),
      resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
      retain_first_backup: cdktf.stringToTerraform(this._retainFirstBackup),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      week_frequency: cdktf.listMapper(cdktf.stringToTerraform)(this._weekFrequency),
      tags: cdktf.listMapper(vbsBackupPolicyV2TagsToTerraform)(this._tags),
      timeouts: vbsBackupPolicyV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
