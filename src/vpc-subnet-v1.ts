// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSubnetV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#availability_zone VpcSubnetV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#cidr VpcSubnetV1#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#dhcp_enable VpcSubnetV1#dhcp_enable}
  */
  readonly dhcpEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#dns_list VpcSubnetV1#dns_list}
  */
  readonly dnsList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#gateway_ip VpcSubnetV1#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#name VpcSubnetV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#ntp_addresses VpcSubnetV1#ntp_addresses}
  */
  readonly ntpAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#primary_dns VpcSubnetV1#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#region VpcSubnetV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#secondary_dns VpcSubnetV1#secondary_dns}
  */
  readonly secondaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#tags VpcSubnetV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#vpc_id VpcSubnetV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#timeouts VpcSubnetV1#timeouts}
  */
  readonly timeouts?: VpcSubnetV1Timeouts;
}
export interface VpcSubnetV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#create VpcSubnetV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html#delete VpcSubnetV1#delete}
  */
  readonly delete?: string;
}

function vpcSubnetV1TimeoutsToTerraform(struct?: VpcSubnetV1TimeoutsOutputReference | VpcSubnetV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcSubnetV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html opentelekomcloud_vpc_subnet_v1}
*/
export class VpcSubnetV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_subnet_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_subnet_v1.html opentelekomcloud_vpc_subnet_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSubnetV1Config
  */
  public constructor(scope: Construct, id: string, config: VpcSubnetV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_subnet_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._cidr = config.cidr;
    this._dhcpEnable = config.dhcpEnable;
    this._dnsList = config.dnsList;
    this._gatewayIp = config.gatewayIp;
    this._name = config.name;
    this._ntpAddresses = config.ntpAddresses;
    this._primaryDns = config.primaryDns;
    this._region = config.region;
    this._secondaryDns = config.secondaryDns;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
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

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr
  }

  // dhcp_enable - computed: false, optional: true, required: false
  private _dhcpEnable?: boolean | cdktf.IResolvable | undefined; 
  public get dhcpEnable() {
    return this.getBooleanAttribute('dhcp_enable') as any;
  }
  public set dhcpEnable(value: boolean | cdktf.IResolvable | undefined) {
    this._dhcpEnable = value;
  }
  public resetDhcpEnable() {
    this._dhcpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnableInput() {
    return this._dhcpEnable
  }

  // dns_list - computed: true, optional: true, required: false
  private _dnsList?: string[] | undefined; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[] | undefined) {
    this._dnsList = value;
  }
  public resetDnsList() {
    this._dnsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList
  }

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // ntp_addresses - computed: false, optional: true, required: false
  private _ntpAddresses?: string | undefined; 
  public get ntpAddresses() {
    return this.getStringAttribute('ntp_addresses');
  }
  public set ntpAddresses(value: string | undefined) {
    this._ntpAddresses = value;
  }
  public resetNtpAddresses() {
    this._ntpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpAddressesInput() {
    return this._ntpAddresses
  }

  // primary_dns - computed: true, optional: true, required: false
  private _primaryDns?: string | undefined; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string | undefined) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns
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

  // secondary_dns - computed: true, optional: true, required: false
  private _secondaryDns?: string | undefined; 
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }
  public set secondaryDns(value: string | undefined) {
    this._secondaryDns = value;
  }
  public resetSecondaryDns() {
    this._secondaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsInput() {
    return this._secondaryDns
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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
  private _timeouts?: VpcSubnetV1Timeouts | undefined; 
  private __timeoutsOutput = new VpcSubnetV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpcSubnetV1Timeouts | undefined) {
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
      cidr: cdktf.stringToTerraform(this._cidr),
      dhcp_enable: cdktf.booleanToTerraform(this._dhcpEnable),
      dns_list: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsList),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      name: cdktf.stringToTerraform(this._name),
      ntp_addresses: cdktf.stringToTerraform(this._ntpAddresses),
      primary_dns: cdktf.stringToTerraform(this._primaryDns),
      region: cdktf.stringToTerraform(this._region),
      secondary_dns: cdktf.stringToTerraform(this._secondaryDns),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: vpcSubnetV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
