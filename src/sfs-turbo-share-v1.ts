// https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsTurboShareV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#availability_zone SfsTurboShareV1#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#crypt_key_id SfsTurboShareV1#crypt_key_id}
  */
  readonly cryptKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#name SfsTurboShareV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#region SfsTurboShareV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#security_group_id SfsTurboShareV1#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#share_proto SfsTurboShareV1#share_proto}
  */
  readonly shareProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#share_type SfsTurboShareV1#share_type}
  */
  readonly shareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#size SfsTurboShareV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#subnet_id SfsTurboShareV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#vpc_id SfsTurboShareV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#timeouts SfsTurboShareV1#timeouts}
  */
  readonly timeouts?: SfsTurboShareV1Timeouts;
}
export interface SfsTurboShareV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#create SfsTurboShareV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html#delete SfsTurboShareV1#delete}
  */
  readonly delete?: string;
}

function sfsTurboShareV1TimeoutsToTerraform(struct?: SfsTurboShareV1TimeoutsOutputReference | SfsTurboShareV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class SfsTurboShareV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html opentelekomcloud_sfs_turbo_share_v1}
*/
export class SfsTurboShareV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_sfs_turbo_share_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sfs_turbo_share_v1.html opentelekomcloud_sfs_turbo_share_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsTurboShareV1Config
  */
  public constructor(scope: Construct, id: string, config: SfsTurboShareV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sfs_turbo_share_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._cryptKeyId = config.cryptKeyId;
    this._name = config.name;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._shareProto = config.shareProto;
    this._shareType = config.shareType;
    this._size = config.size;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // available_capacity - computed: true, optional: false, required: false
  public get availableCapacity() {
    return this.getStringAttribute('available_capacity');
  }

  // crypt_key_id - computed: false, optional: true, required: false
  private _cryptKeyId?: string | undefined; 
  public get cryptKeyId() {
    return this.getStringAttribute('crypt_key_id');
  }
  public set cryptKeyId(value: string | undefined) {
    this._cryptKeyId = value;
  }
  public resetCryptKeyId() {
    this._cryptKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptKeyIdInput() {
    return this._cryptKeyId
  }

  // export_location - computed: true, optional: false, required: false
  public get exportLocation() {
    return this.getStringAttribute('export_location');
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId
  }

  // share_proto - computed: false, optional: true, required: false
  private _shareProto?: string | undefined; 
  public get shareProto() {
    return this.getStringAttribute('share_proto');
  }
  public set shareProto(value: string | undefined) {
    this._shareProto = value;
  }
  public resetShareProto() {
    this._shareProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProtoInput() {
    return this._shareProto
  }

  // share_type - computed: false, optional: true, required: false
  private _shareType?: string | undefined; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string | undefined) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SfsTurboShareV1Timeouts | undefined; 
  private __timeoutsOutput = new SfsTurboShareV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SfsTurboShareV1Timeouts | undefined) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      crypt_key_id: cdktf.stringToTerraform(this._cryptKeyId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      share_proto: cdktf.stringToTerraform(this._shareProto),
      share_type: cdktf.stringToTerraform(this._shareType),
      size: cdktf.numberToTerraform(this._size),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: sfsTurboShareV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
