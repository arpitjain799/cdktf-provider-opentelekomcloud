// https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudLbListenerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#description DataOpentelekomcloudLbListenerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#id DataOpentelekomcloudLbListenerV3#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#member_address DataOpentelekomcloudLbListenerV3#member_address}
  */
  readonly memberAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}
  */
  readonly memberDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}
  */
  readonly memberTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#name DataOpentelekomcloudLbListenerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#protocol DataOpentelekomcloudLbListenerV3#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}
  */
  readonly protocolPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
}
export class DataOpentelekomcloudLbListenerV3InsertHeaders extends cdktf.ComplexComputedList {

  // forward_elb_ip - computed: true, optional: false, required: false
  public get forwardElbIp() {
    return this.getBooleanAttribute('forward_elb_ip') as any;
  }

  // forwarded_for_port - computed: true, optional: false, required: false
  public get forwardedForPort() {
    return this.getBooleanAttribute('forwarded_for_port') as any;
  }

  // forwarded_host - computed: true, optional: false, required: false
  public get forwardedHost() {
    return this.getBooleanAttribute('forwarded_host') as any;
  }

  // forwarded_port - computed: true, optional: false, required: false
  public get forwardedPort() {
    return this.getBooleanAttribute('forwarded_port') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html opentelekomcloud_lb_listener_v3}
*/
export class DataOpentelekomcloudLbListenerV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_listener_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/lb_listener_v3.html opentelekomcloud_lb_listener_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudLbListenerV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudLbListenerV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_listener_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._clientTimeout = config.clientTimeout;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._id = config.id;
    this._keepAliveTimeout = config.keepAliveTimeout;
    this._loadbalancerId = config.loadbalancerId;
    this._memberAddress = config.memberAddress;
    this._memberDeviceId = config.memberDeviceId;
    this._memberTimeout = config.memberTimeout;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }

  // client_ca_tls_container_ref - computed: false, optional: true, required: false
  private _clientCaTlsContainerRef?: string | undefined; 
  public get clientCaTlsContainerRef() {
    return this.getStringAttribute('client_ca_tls_container_ref');
  }
  public set clientCaTlsContainerRef(value: string | undefined) {
    this._clientCaTlsContainerRef = value;
  }
  public resetClientCaTlsContainerRef() {
    this._clientCaTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaTlsContainerRefInput() {
    return this._clientCaTlsContainerRef
  }

  // client_timeout - computed: false, optional: true, required: false
  private _clientTimeout?: number | undefined; 
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }
  public set clientTimeout(value: number | undefined) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_pool_id - computed: false, optional: true, required: false
  private _defaultPoolId?: string | undefined; 
  public get defaultPoolId() {
    return this.getStringAttribute('default_pool_id');
  }
  public set defaultPoolId(value: string | undefined) {
    this._defaultPoolId = value;
  }
  public resetDefaultPoolId() {
    this._defaultPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdInput() {
    return this._defaultPoolId
  }

  // default_tls_container_ref - computed: false, optional: true, required: false
  private _defaultTlsContainerRef?: string | undefined; 
  public get defaultTlsContainerRef() {
    return this.getStringAttribute('default_tls_container_ref');
  }
  public set defaultTlsContainerRef(value: string | undefined) {
    this._defaultTlsContainerRef = value;
  }
  public resetDefaultTlsContainerRef() {
    this._defaultTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsContainerRefInput() {
    return this._defaultTlsContainerRef
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

  // http2_enable - computed: true, optional: false, required: false
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable') as any;
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

  // insert_headers - computed: true, optional: false, required: false
  public insertHeaders(index: string) {
    return new DataOpentelekomcloudLbListenerV3InsertHeaders(this, 'insert_headers', index);
  }

  // keep_alive_timeout - computed: false, optional: true, required: false
  private _keepAliveTimeout?: number | undefined; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number | undefined) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout
  }

  // loadbalancer_id - computed: false, optional: true, required: false
  private _loadbalancerId?: string | undefined; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string | undefined) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
  }

  // member_address - computed: false, optional: true, required: false
  private _memberAddress?: string | undefined; 
  public get memberAddress() {
    return this.getStringAttribute('member_address');
  }
  public set memberAddress(value: string | undefined) {
    this._memberAddress = value;
  }
  public resetMemberAddress() {
    this._memberAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAddressInput() {
    return this._memberAddress
  }

  // member_device_id - computed: false, optional: true, required: false
  private _memberDeviceId?: string | undefined; 
  public get memberDeviceId() {
    return this.getStringAttribute('member_device_id');
  }
  public set memberDeviceId(value: string | undefined) {
    this._memberDeviceId = value;
  }
  public resetMemberDeviceId() {
    this._memberDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDeviceIdInput() {
    return this._memberDeviceId
  }

  // member_retry_enable - computed: true, optional: false, required: false
  public get memberRetryEnable() {
    return this.getBooleanAttribute('member_retry_enable') as any;
  }

  // member_timeout - computed: false, optional: true, required: false
  private _memberTimeout?: number | undefined; 
  public get memberTimeout() {
    return this.getNumberAttribute('member_timeout');
  }
  public set memberTimeout(value: number | undefined) {
    this._memberTimeout = value;
  }
  public resetMemberTimeout() {
    this._memberTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTimeoutInput() {
    return this._memberTimeout
  }

  // memory_retry_enable - computed: true, optional: false, required: false
  public get memoryRetryEnable() {
    return this.getBooleanAttribute('memory_retry_enable') as any;
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string | undefined; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // protocol_port - computed: false, optional: true, required: false
  private _protocolPort?: number | undefined; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number | undefined) {
    this._protocolPort = value;
  }
  public resetProtocolPort() {
    this._protocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort
  }

  // sni_container_refs - computed: true, optional: false, required: false
  public get sniContainerRefs() {
    return this.getListAttribute('sni_container_refs');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // tls_ciphers_policy - computed: false, optional: true, required: false
  private _tlsCiphersPolicy?: string | undefined; 
  public get tlsCiphersPolicy() {
    return this.getStringAttribute('tls_ciphers_policy');
  }
  public set tlsCiphersPolicy(value: string | undefined) {
    this._tlsCiphersPolicy = value;
  }
  public resetTlsCiphersPolicy() {
    this._tlsCiphersPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersPolicyInput() {
    return this._tlsCiphersPolicy
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
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_timeout: cdktf.numberToTerraform(this._keepAliveTimeout),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      member_address: cdktf.stringToTerraform(this._memberAddress),
      member_device_id: cdktf.stringToTerraform(this._memberDeviceId),
      member_timeout: cdktf.numberToTerraform(this._memberTimeout),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
    };
  }
}
