// https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagesImageV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#container_format ImagesImageV2#container_format}
  */
  readonly containerFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#disk_format ImagesImageV2#disk_format}
  */
  readonly diskFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#image_cache_path ImagesImageV2#image_cache_path}
  */
  readonly imageCachePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#image_source_url ImagesImageV2#image_source_url}
  */
  readonly imageSourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#local_file_path ImagesImageV2#local_file_path}
  */
  readonly localFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#min_disk_gb ImagesImageV2#min_disk_gb}
  */
  readonly minDiskGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#min_ram_mb ImagesImageV2#min_ram_mb}
  */
  readonly minRamMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#name ImagesImageV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#protected ImagesImageV2#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#region ImagesImageV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#tags ImagesImageV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#visibility ImagesImageV2#visibility}
  */
  readonly visibility?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#timeouts ImagesImageV2#timeouts}
  */
  readonly timeouts?: ImagesImageV2Timeouts;
}
export interface ImagesImageV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html#create ImagesImageV2#create}
  */
  readonly create?: string;
}

function imagesImageV2TimeoutsToTerraform(struct?: ImagesImageV2TimeoutsOutputReference | ImagesImageV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class ImagesImageV2TimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html opentelekomcloud_images_image_v2}
*/
export class ImagesImageV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_images_image_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2.html opentelekomcloud_images_image_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagesImageV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagesImageV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_images_image_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerFormat = config.containerFormat;
    this._diskFormat = config.diskFormat;
    this._imageCachePath = config.imageCachePath;
    this._imageSourceUrl = config.imageSourceUrl;
    this._localFilePath = config.localFilePath;
    this._minDiskGb = config.minDiskGb;
    this._minRamMb = config.minRamMb;
    this._name = config.name;
    this._protected = config.protected;
    this._region = config.region;
    this._tags = config.tags;
    this._visibility = config.visibility;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // container_format - computed: false, optional: false, required: true
  private _containerFormat?: string; 
  public get containerFormat() {
    return this.getStringAttribute('container_format');
  }
  public set containerFormat(value: string) {
    this._containerFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerFormatInput() {
    return this._containerFormat
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk_format - computed: false, optional: false, required: true
  private _diskFormat?: string; 
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }
  public set diskFormat(value: string) {
    this._diskFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFormatInput() {
    return this._diskFormat
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_cache_path - computed: false, optional: true, required: false
  private _imageCachePath?: string | undefined; 
  public get imageCachePath() {
    return this.getStringAttribute('image_cache_path');
  }
  public set imageCachePath(value: string | undefined) {
    this._imageCachePath = value;
  }
  public resetImageCachePath() {
    this._imageCachePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCachePathInput() {
    return this._imageCachePath
  }

  // image_source_url - computed: false, optional: true, required: false
  private _imageSourceUrl?: string | undefined; 
  public get imageSourceUrl() {
    return this.getStringAttribute('image_source_url');
  }
  public set imageSourceUrl(value: string | undefined) {
    this._imageSourceUrl = value;
  }
  public resetImageSourceUrl() {
    this._imageSourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourceUrlInput() {
    return this._imageSourceUrl
  }

  // local_file_path - computed: false, optional: true, required: false
  private _localFilePath?: string | undefined; 
  public get localFilePath() {
    return this.getStringAttribute('local_file_path');
  }
  public set localFilePath(value: string | undefined) {
    this._localFilePath = value;
  }
  public resetLocalFilePath() {
    this._localFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilePathInput() {
    return this._localFilePath
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // min_disk_gb - computed: false, optional: true, required: false
  private _minDiskGb?: number | undefined; 
  public get minDiskGb() {
    return this.getNumberAttribute('min_disk_gb');
  }
  public set minDiskGb(value: number | undefined) {
    this._minDiskGb = value;
  }
  public resetMinDiskGb() {
    this._minDiskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskGbInput() {
    return this._minDiskGb
  }

  // min_ram_mb - computed: false, optional: true, required: false
  private _minRamMb?: number | undefined; 
  public get minRamMb() {
    return this.getNumberAttribute('min_ram_mb');
  }
  public set minRamMb(value: number | undefined) {
    this._minRamMb = value;
  }
  public resetMinRamMb() {
    this._minRamMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamMbInput() {
    return this._minRamMb
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable | undefined; 
  public get protected() {
    return this.getBooleanAttribute('protected') as any;
  }
  public set protected(value: boolean | cdktf.IResolvable | undefined) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected
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

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string | undefined; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string | undefined) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImagesImageV2Timeouts | undefined; 
  private __timeoutsOutput = new ImagesImageV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ImagesImageV2Timeouts | undefined) {
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
      container_format: cdktf.stringToTerraform(this._containerFormat),
      disk_format: cdktf.stringToTerraform(this._diskFormat),
      image_cache_path: cdktf.stringToTerraform(this._imageCachePath),
      image_source_url: cdktf.stringToTerraform(this._imageSourceUrl),
      local_file_path: cdktf.stringToTerraform(this._localFilePath),
      min_disk_gb: cdktf.numberToTerraform(this._minDiskGb),
      min_ram_mb: cdktf.numberToTerraform(this._minRamMb),
      name: cdktf.stringToTerraform(this._name),
      protected: cdktf.booleanToTerraform(this._protected),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
      timeouts: imagesImageV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
