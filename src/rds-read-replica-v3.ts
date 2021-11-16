// https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsReadReplicaV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#availability_zone RdsReadReplicaV3#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#flavor_ref RdsReadReplicaV3#flavor_ref}
  */
  readonly flavorRef: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#name RdsReadReplicaV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#public_ips RdsReadReplicaV3#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#region RdsReadReplicaV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#replica_of_id RdsReadReplicaV3#replica_of_id}
  */
  readonly replicaOfId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#timeouts RdsReadReplicaV3#timeouts}
  */
  readonly timeouts?: RdsReadReplicaV3Timeouts;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#volume RdsReadReplicaV3#volume}
  */
  readonly volume: RdsReadReplicaV3Volume;
}
export class RdsReadReplicaV3Db extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface RdsReadReplicaV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#create RdsReadReplicaV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#update RdsReadReplicaV3#update}
  */
  readonly update?: string;
}

function rdsReadReplicaV3TimeoutsToTerraform(struct?: RdsReadReplicaV3TimeoutsOutputReference | RdsReadReplicaV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RdsReadReplicaV3TimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface RdsReadReplicaV3Volume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}
  */
  readonly diskEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html#type RdsReadReplicaV3#type}
  */
  readonly type: string;
}

function rdsReadReplicaV3VolumeToTerraform(struct?: RdsReadReplicaV3VolumeOutputReference | RdsReadReplicaV3Volume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_id: cdktf.stringToTerraform(struct!.diskEncryptionId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class RdsReadReplicaV3VolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disk_encryption_id - computed: true, optional: true, required: false
  private _diskEncryptionId?: string | undefined; 
  public get diskEncryptionId() {
    return this.getStringAttribute('disk_encryption_id');
  }
  public set diskEncryptionId(value: string | undefined) {
    this._diskEncryptionId = value;
  }
  public resetDiskEncryptionId() {
    this._diskEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionIdInput() {
    return this._diskEncryptionId
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html opentelekomcloud_rds_read_replica_v3}
*/
export class RdsReadReplicaV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_read_replica_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_read_replica_v3.html opentelekomcloud_rds_read_replica_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsReadReplicaV3Config
  */
  public constructor(scope: Construct, id: string, config: RdsReadReplicaV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_read_replica_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._flavorRef = config.flavorRef;
    this._name = config.name;
    this._publicIps = config.publicIps;
    this._region = config.region;
    this._replicaOfId = config.replicaOfId;
    this._timeouts = config.timeouts;
    this._volume = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string | undefined; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // db - computed: true, optional: false, required: false
  public db(index: string) {
    return new RdsReadReplicaV3Db(this, 'db', index);
  }

  // flavor_ref - computed: false, optional: false, required: true
  private _flavorRef?: string; 
  public get flavorRef() {
    return this.getStringAttribute('flavor_ref');
  }
  public set flavorRef(value: string) {
    this._flavorRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorRefInput() {
    return this._flavorRef
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

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // public_ips - computed: true, optional: true, required: false
  private _publicIps?: string[] | undefined; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[] | undefined) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps
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

  // replica_of_id - computed: false, optional: false, required: true
  private _replicaOfId?: string; 
  public get replicaOfId() {
    return this.getStringAttribute('replica_of_id');
  }
  public set replicaOfId(value: string) {
    this._replicaOfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaOfIdInput() {
    return this._replicaOfId
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RdsReadReplicaV3Timeouts | undefined; 
  private __timeoutsOutput = new RdsReadReplicaV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RdsReadReplicaV3Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: RdsReadReplicaV3Volume; 
  private __volumeOutput = new RdsReadReplicaV3VolumeOutputReference(this as any, "volume", true);
  public get volume() {
    return this.__volumeOutput;
  }
  public putVolume(value: RdsReadReplicaV3Volume) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      flavor_ref: cdktf.stringToTerraform(this._flavorRef),
      name: cdktf.stringToTerraform(this._name),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._publicIps),
      region: cdktf.stringToTerraform(this._region),
      replica_of_id: cdktf.stringToTerraform(this._replicaOfId),
      timeouts: rdsReadReplicaV3TimeoutsToTerraform(this._timeouts),
      volume: rdsReadReplicaV3VolumeToTerraform(this._volume),
    };
  }
}
