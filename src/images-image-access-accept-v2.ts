// https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagesImageAccessAcceptV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html#image_id ImagesImageAccessAcceptV2#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html#member_id ImagesImageAccessAcceptV2#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html#status ImagesImageAccessAcceptV2#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html opentelekomcloud_images_image_access_accept_v2}
*/
export class ImagesImageAccessAcceptV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_images_image_access_accept_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_access_accept_v2.html opentelekomcloud_images_image_access_accept_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagesImageAccessAcceptV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagesImageAccessAcceptV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_images_image_access_accept_v2',
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
