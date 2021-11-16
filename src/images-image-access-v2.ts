// https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagesImageAccessV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html#image_id ImagesImageAccessV2#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html#member_id ImagesImageAccessV2#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html#status ImagesImageAccessV2#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html opentelekomcloud_images_image_access_v2}
*/
export class ImagesImageAccessV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_images_image_access_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_v2.html opentelekomcloud_images_image_access_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagesImageAccessV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagesImageAccessV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_images_image_access_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageId = config.imageId;
    this._memberId = config.memberId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // status - computed: true, optional: true, required: false
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

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: cdktf.stringToTerraform(this._imageId),
      member_id: cdktf.stringToTerraform(this._memberId),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
