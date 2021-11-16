// https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockstorageVolumeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#availability_zone BlockstorageVolumeV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#cascade BlockstorageVolumeV2#cascade}
  */
  readonly cascade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#consistency_group_id BlockstorageVolumeV2#consistency_group_id}
  */
  readonly consistencyGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#description BlockstorageVolumeV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#device_type BlockstorageVolumeV2#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#image_id BlockstorageVolumeV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#metadata BlockstorageVolumeV2#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#name BlockstorageVolumeV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#region BlockstorageVolumeV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#size BlockstorageVolumeV2#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#snapshot_id BlockstorageVolumeV2#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#source_replica BlockstorageVolumeV2#source_replica}
  */
  readonly sourceReplica?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#source_vol_id BlockstorageVolumeV2#source_vol_id}
  */
  readonly sourceVolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#tags BlockstorageVolumeV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#volume_type BlockstorageVolumeV2#volume_type}
  */
  readonly volumeType?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#timeouts BlockstorageVolumeV2#timeouts}
  */
  readonly timeouts?: BlockstorageVolumeV2Timeouts;
}
export class BlockstorageVolumeV2Attachment extends cdktf.ComplexComputedList {

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface BlockstorageVolumeV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#create BlockstorageVolumeV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html#delete BlockstorageVolumeV2#delete}
  */
  readonly delete?: string;
}

function blockstorageVolumeV2TimeoutsToTerraform(struct?: BlockstorageVolumeV2TimeoutsOutputReference | BlockstorageVolumeV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class BlockstorageVolumeV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html opentelekomcloud_blockstorage_volume_v2}
*/
export class BlockstorageVolumeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_blockstorage_volume_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2.html opentelekomcloud_blockstorage_volume_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockstorageVolumeV2Config
  */
  public constructor(scope: Construct, id: string, config: BlockstorageVolumeV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_blockstorage_volume_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._cascade = config.cascade;
    this._consistencyGroupId = config.consistencyGroupId;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._imageId = config.imageId;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._sourceReplica = config.sourceReplica;
    this._sourceVolId = config.sourceVolId;
    this._tags = config.tags;
    this._volumeType = config.volumeType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment - computed: true, optional: false, required: false
  public attachment(index: string) {
    return new BlockstorageVolumeV2Attachment(this, 'attachment', index);
  }

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

  // cascade - computed: false, optional: true, required: false
  private _cascade?: boolean | cdktf.IResolvable | undefined; 
  public get cascade() {
    return this.getBooleanAttribute('cascade') as any;
  }
  public set cascade(value: boolean | cdktf.IResolvable | undefined) {
    this._cascade = value;
  }
  public resetCascade() {
    this._cascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInput() {
    return this._cascade
  }

  // consistency_group_id - computed: false, optional: true, required: false
  private _consistencyGroupId?: string | undefined; 
  public get consistencyGroupId() {
    return this.getStringAttribute('consistency_group_id');
  }
  public set consistencyGroupId(value: string | undefined) {
    this._consistencyGroupId = value;
  }
  public resetConsistencyGroupId() {
    this._consistencyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyGroupIdInput() {
    return this._consistencyGroupId
  }

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

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string | undefined; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string | undefined) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string | undefined; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string | undefined) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string | undefined; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string | undefined) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId
  }

  // source_replica - computed: false, optional: true, required: false
  private _sourceReplica?: string | undefined; 
  public get sourceReplica() {
    return this.getStringAttribute('source_replica');
  }
  public set sourceReplica(value: string | undefined) {
    this._sourceReplica = value;
  }
  public resetSourceReplica() {
    this._sourceReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceReplicaInput() {
    return this._sourceReplica
  }

  // source_vol_id - computed: false, optional: true, required: false
  private _sourceVolId?: string | undefined; 
  public get sourceVolId() {
    return this.getStringAttribute('source_vol_id');
  }
  public set sourceVolId(value: string | undefined) {
    this._sourceVolId = value;
  }
  public resetSourceVolId() {
    this._sourceVolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolIdInput() {
    return this._sourceVolId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string | undefined; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string | undefined) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BlockstorageVolumeV2Timeouts | undefined; 
  private __timeoutsOutput = new BlockstorageVolumeV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BlockstorageVolumeV2Timeouts | undefined) {
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
      cascade: cdktf.booleanToTerraform(this._cascade),
      consistency_group_id: cdktf.stringToTerraform(this._consistencyGroupId),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.stringToTerraform(this._deviceType),
      image_id: cdktf.stringToTerraform(this._imageId),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      source_replica: cdktf.stringToTerraform(this._sourceReplica),
      source_vol_id: cdktf.stringToTerraform(this._sourceVolId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      timeouts: blockstorageVolumeV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
