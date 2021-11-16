// https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudComputeBmsServerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}
  */
  readonly hostStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#id DataOpentelekomcloudComputeBmsServerV2#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#name DataOpentelekomcloudComputeBmsServerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#region DataOpentelekomcloudComputeBmsServerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#status DataOpentelekomcloudComputeBmsServerV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}
  */
  readonly userId?: string;
}
export class DataOpentelekomcloudComputeBmsServerV2Network extends cdktf.ComplexComputedList {

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export class DataOpentelekomcloudComputeBmsServerV2SecurityGroups extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html opentelekomcloud_compute_bms_server_v2}
*/
export class DataOpentelekomcloudComputeBmsServerV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_compute_bms_server_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2.html opentelekomcloud_compute_bms_server_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudComputeBmsServerV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudComputeBmsServerV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_compute_bms_server_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._flavorId = config.flavorId;
    this._hostStatus = config.hostStatus;
    this._id = config.id;
    this._imageId = config.imageId;
    this._keyName = config.keyName;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_ip_v4 - computed: true, optional: false, required: false
  public get accessIpV4() {
    return this.getStringAttribute('access_ip_v4');
  }

  // access_ip_v6 - computed: true, optional: false, required: false
  public get accessIpV6() {
    return this.getStringAttribute('access_ip_v6');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // config_drive - computed: true, optional: false, required: false
  public get configDrive() {
    return this.getStringAttribute('config_drive');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string | undefined; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string | undefined) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_status - computed: false, optional: true, required: false
  private _hostStatus?: string | undefined; 
  public get hostStatus() {
    return this.getStringAttribute('host_status');
  }
  public set hostStatus(value: string | undefined) {
    this._hostStatus = value;
  }
  public resetHostStatus() {
    this._hostStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStatusInput() {
    return this._hostStatus
  }

  // hypervisor_hostname - computed: true, optional: false, required: false
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
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

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string | undefined; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked') as any;
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
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

  // network - computed: true, optional: false, required: false
  public network(index: string) {
    return new DataOpentelekomcloudComputeBmsServerV2Network(this, 'network', index);
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
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

  // security_groups - computed: true, optional: false, required: false
  public securityGroups(index: string) {
    return new DataOpentelekomcloudComputeBmsServerV2SecurityGroups(this, 'security_groups', index);
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
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string | undefined; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      host_status: cdktf.stringToTerraform(this._hostStatus),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
