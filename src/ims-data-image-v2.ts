// https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImsDataImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#cmk_id ImsDataImageV2#cmk_id}
  */
  readonly cmkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#description ImsDataImageV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#image_url ImsDataImageV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#min_disk ImsDataImageV2#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#name ImsDataImageV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#os_type ImsDataImageV2#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#tags ImsDataImageV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#volume_id ImsDataImageV2#volume_id}
  */
  readonly volumeId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#timeouts ImsDataImageV2#timeouts}
  */
  readonly timeouts?: ImsDataImageV2Timeouts;
}
export interface ImsDataImageV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#create ImsDataImageV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html#delete ImsDataImageV2#delete}
  */
  readonly delete?: string;
}

function imsDataImageV2TimeoutsToTerraform(struct?: ImsDataImageV2TimeoutsOutputReference | ImsDataImageV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ImsDataImageV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html opentelekomcloud_ims_data_image_v2}
*/
export class ImsDataImageV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_ims_data_image_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/ims_data_image_v2.html opentelekomcloud_ims_data_image_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImsDataImageV2Config
  */
  public constructor(scope: Construct, id: string, config: ImsDataImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ims_data_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cmkId = config.cmkId;
    this._description = config.description;
    this._imageUrl = config.imageUrl;
    this._minDisk = config.minDisk;
    this._name = config.name;
    this._osType = config.osType;
    this._tags = config.tags;
    this._volumeId = config.volumeId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_id - computed: false, optional: true, required: false
  private _cmkId?: string | undefined; 
  public get cmkId() {
    return this.getStringAttribute('cmk_id');
  }
  public set cmkId(value: string | undefined) {
    this._cmkId = value;
  }
  public resetCmkId() {
    this._cmkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkIdInput() {
    return this._cmkId
  }

  // data_origin - computed: true, optional: false, required: false
  public get dataOrigin() {
    return this.getStringAttribute('data_origin');
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

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getStringAttribute('image_size');
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string | undefined; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string | undefined) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl
  }

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number | undefined; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number | undefined) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string | undefined; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string | undefined) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string | undefined; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string | undefined) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImsDataImageV2Timeouts | undefined; 
  private __timeoutsOutput = new ImsDataImageV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ImsDataImageV2Timeouts | undefined) {
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
      cmk_id: cdktf.stringToTerraform(this._cmkId),
      description: cdktf.stringToTerraform(this._description),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      min_disk: cdktf.numberToTerraform(this._minDisk),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      timeouts: imsDataImageV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
