// https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudVbsBackupPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#id DataOpentelekomcloudVbsBackupPolicyV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#name DataOpentelekomcloudVbsBackupPolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#policy_resource_count DataOpentelekomcloudVbsBackupPolicyV2#policy_resource_count}
  */
  readonly policyResourceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#region DataOpentelekomcloudVbsBackupPolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#status DataOpentelekomcloudVbsBackupPolicyV2#status}
  */
  readonly status?: string;
  /**
  * filter_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#filter_tags DataOpentelekomcloudVbsBackupPolicyV2#filter_tags}
  */
  readonly filterTags?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[];
}
export class DataOpentelekomcloudVbsBackupPolicyV2Tags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataOpentelekomcloudVbsBackupPolicyV2FilterTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#key DataOpentelekomcloudVbsBackupPolicyV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html#values DataOpentelekomcloudVbsBackupPolicyV2#values}
  */
  readonly values: string[];
}

function dataOpentelekomcloudVbsBackupPolicyV2FilterTagsToTerraform(struct?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html opentelekomcloud_vbs_backup_policy_v2}
*/
export class DataOpentelekomcloudVbsBackupPolicyV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vbs_backup_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vbs_backup_policy_v2.html opentelekomcloud_vbs_backup_policy_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudVbsBackupPolicyV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudVbsBackupPolicyV2Config = {}) {
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
    this._id = config.id;
    this._name = config.name;
    this._policyResourceCount = config.policyResourceCount;
    this._region = config.region;
    this._status = config.status;
    this._filterTags = config.filterTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // policy_resource_count - computed: false, optional: true, required: false
  private _policyResourceCount?: number | undefined; 
  public get policyResourceCount() {
    return this.getNumberAttribute('policy_resource_count');
  }
  public set policyResourceCount(value: number | undefined) {
    this._policyResourceCount = value;
  }
  public resetPolicyResourceCount() {
    this._policyResourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyResourceCountInput() {
    return this._policyResourceCount
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

  // remain_first_backup - computed: true, optional: false, required: false
  public get remainFirstBackup() {
    return this.getStringAttribute('remain_first_backup');
  }

  // rentention_num - computed: true, optional: false, required: false
  public get rententionNum() {
    return this.getNumberAttribute('rentention_num');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
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

  // tags - computed: true, optional: false, required: false
  public tags(index: string) {
    return new DataOpentelekomcloudVbsBackupPolicyV2Tags(this, 'tags', index);
  }

  // filter_tags - computed: false, optional: true, required: false
  private _filterTags?: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[] | undefined; 
  public get filterTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter_tags') as any;
  }
  public set filterTags(value: DataOpentelekomcloudVbsBackupPolicyV2FilterTags[] | undefined) {
    this._filterTags = value;
  }
  public resetFilterTags() {
    this._filterTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagsInput() {
    return this._filterTags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_resource_count: cdktf.numberToTerraform(this._policyResourceCount),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      filter_tags: cdktf.listMapper(dataOpentelekomcloudVbsBackupPolicyV2FilterTagsToTerraform)(this._filterTags),
    };
  }
}
