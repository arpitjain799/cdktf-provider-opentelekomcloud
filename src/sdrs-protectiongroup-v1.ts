// https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdrsProtectiongroupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#description SdrsProtectiongroupV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#domain_id SdrsProtectiongroupV1#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#dr_type SdrsProtectiongroupV1#dr_type}
  */
  readonly drType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#name SdrsProtectiongroupV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}
  */
  readonly sourceAvailabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}
  */
  readonly sourceVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}
  */
  readonly targetAvailabilityZone: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#timeouts SdrsProtectiongroupV1#timeouts}
  */
  readonly timeouts?: SdrsProtectiongroupV1Timeouts;
}
export interface SdrsProtectiongroupV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#create SdrsProtectiongroupV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html#delete SdrsProtectiongroupV1#delete}
  */
  readonly delete?: string;
}

function sdrsProtectiongroupV1TimeoutsToTerraform(struct?: SdrsProtectiongroupV1TimeoutsOutputReference | SdrsProtectiongroupV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class SdrsProtectiongroupV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html opentelekomcloud_sdrs_protectiongroup_v1}
*/
export class SdrsProtectiongroupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_sdrs_protectiongroup_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1.html opentelekomcloud_sdrs_protectiongroup_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdrsProtectiongroupV1Config
  */
  public constructor(scope: Construct, id: string, config: SdrsProtectiongroupV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sdrs_protectiongroup_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._drType = config.drType;
    this._name = config.name;
    this._sourceAvailabilityZone = config.sourceAvailabilityZone;
    this._sourceVpcId = config.sourceVpcId;
    this._targetAvailabilityZone = config.targetAvailabilityZone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // dr_type - computed: false, optional: true, required: false
  private _drType?: string | undefined; 
  public get drType() {
    return this.getStringAttribute('dr_type');
  }
  public set drType(value: string | undefined) {
    this._drType = value;
  }
  public resetDrType() {
    this._drType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drTypeInput() {
    return this._drType
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

  // source_availability_zone - computed: false, optional: false, required: true
  private _sourceAvailabilityZone?: string; 
  public get sourceAvailabilityZone() {
    return this.getStringAttribute('source_availability_zone');
  }
  public set sourceAvailabilityZone(value: string) {
    this._sourceAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAvailabilityZoneInput() {
    return this._sourceAvailabilityZone
  }

  // source_vpc_id - computed: false, optional: false, required: true
  private _sourceVpcId?: string; 
  public get sourceVpcId() {
    return this.getStringAttribute('source_vpc_id');
  }
  public set sourceVpcId(value: string) {
    this._sourceVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcIdInput() {
    return this._sourceVpcId
  }

  // target_availability_zone - computed: false, optional: false, required: true
  private _targetAvailabilityZone?: string; 
  public get targetAvailabilityZone() {
    return this.getStringAttribute('target_availability_zone');
  }
  public set targetAvailabilityZone(value: string) {
    this._targetAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilityZoneInput() {
    return this._targetAvailabilityZone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SdrsProtectiongroupV1Timeouts | undefined; 
  private __timeoutsOutput = new SdrsProtectiongroupV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SdrsProtectiongroupV1Timeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      dr_type: cdktf.stringToTerraform(this._drType),
      name: cdktf.stringToTerraform(this._name),
      source_availability_zone: cdktf.stringToTerraform(this._sourceAvailabilityZone),
      source_vpc_id: cdktf.stringToTerraform(this._sourceVpcId),
      target_availability_zone: cdktf.stringToTerraform(this._targetAvailabilityZone),
      timeouts: sdrsProtectiongroupV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
