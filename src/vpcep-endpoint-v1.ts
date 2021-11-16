// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcepEndpointV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#enable_dns VpcepEndpointV1#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#enable_whitelist VpcepEndpointV1#enable_whitelist}
  */
  readonly enableWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#port_ip VpcepEndpointV1#port_ip}
  */
  readonly portIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#route_tables VpcepEndpointV1#route_tables}
  */
  readonly routeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#service_id VpcepEndpointV1#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#subnet_id VpcepEndpointV1#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#tags VpcepEndpointV1#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#vpc_id VpcepEndpointV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#whitelist VpcepEndpointV1#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#timeouts VpcepEndpointV1#timeouts}
  */
  readonly timeouts?: VpcepEndpointV1Timeouts;
}
export interface VpcepEndpointV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html#default VpcepEndpointV1#default}
  */
  readonly default?: string;
}

function vpcepEndpointV1TimeoutsToTerraform(struct?: VpcepEndpointV1TimeoutsOutputReference | VpcepEndpointV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class VpcepEndpointV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default - computed: false, optional: true, required: false
  private _default?: string | undefined; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string | undefined) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html opentelekomcloud_vpcep_endpoint_v1}
*/
export class VpcepEndpointV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpcep_endpoint_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpcep_endpoint_v1.html opentelekomcloud_vpcep_endpoint_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcepEndpointV1Config
  */
  public constructor(scope: Construct, id: string, config: VpcepEndpointV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpcep_endpoint_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableDns = config.enableDns;
    this._enableWhitelist = config.enableWhitelist;
    this._portIp = config.portIp;
    this._routeTables = config.routeTables;
    this._serviceId = config.serviceId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._whitelist = config.whitelist;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // enable_dns - computed: true, optional: true, required: false
  private _enableDns?: boolean | cdktf.IResolvable | undefined; 
  public get enableDns() {
    return this.getBooleanAttribute('enable_dns') as any;
  }
  public set enableDns(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDns = value;
  }
  public resetEnableDns() {
    this._enableDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsInput() {
    return this._enableDns
  }

  // enable_whitelist - computed: true, optional: true, required: false
  private _enableWhitelist?: boolean | cdktf.IResolvable | undefined; 
  public get enableWhitelist() {
    return this.getBooleanAttribute('enable_whitelist') as any;
  }
  public set enableWhitelist(value: boolean | cdktf.IResolvable | undefined) {
    this._enableWhitelist = value;
  }
  public resetEnableWhitelist() {
    this._enableWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhitelistInput() {
    return this._enableWhitelist
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // marker_id - computed: true, optional: false, required: false
  public get markerId() {
    return this.getNumberAttribute('marker_id');
  }

  // port_ip - computed: true, optional: true, required: false
  private _portIp?: string | undefined; 
  public get portIp() {
    return this.getStringAttribute('port_ip');
  }
  public set portIp(value: string | undefined) {
    this._portIp = value;
  }
  public resetPortIp() {
    this._portIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIpInput() {
    return this._portIp
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // route_tables - computed: true, optional: true, required: false
  private _routeTables?: string[] | undefined; 
  public get routeTables() {
    return this.getListAttribute('route_tables');
  }
  public set routeTables(value: string[] | undefined) {
    this._routeTables = value;
  }
  public resetRouteTables() {
    this._routeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablesInput() {
    return this._routeTables
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: true, optional: true, required: false
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

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string[] | undefined; 
  public get whitelist() {
    return this.getListAttribute('whitelist');
  }
  public set whitelist(value: string[] | undefined) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcepEndpointV1Timeouts | undefined; 
  private __timeoutsOutput = new VpcepEndpointV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpcepEndpointV1Timeouts | undefined) {
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
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      enable_whitelist: cdktf.booleanToTerraform(this._enableWhitelist),
      port_ip: cdktf.stringToTerraform(this._portIp),
      route_tables: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTables),
      service_id: cdktf.stringToTerraform(this._serviceId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._whitelist),
      timeouts: vpcepEndpointV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
