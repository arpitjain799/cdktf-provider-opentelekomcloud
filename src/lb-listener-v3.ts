// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#admin_state_up LbListenerV3#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#client_timeout LbListenerV3#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#default_pool_id LbListenerV3#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#default_tls_container_ref LbListenerV3#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#description LbListenerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#http2_enable LbListenerV3#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#keep_alive_timeout LbListenerV3#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#loadbalancer_id LbListenerV3#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#member_retry_enable LbListenerV3#member_retry_enable}
  */
  readonly memberRetryEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#member_timeout LbListenerV3#member_timeout}
  */
  readonly memberTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#name LbListenerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#protocol LbListenerV3#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#protocol_port LbListenerV3#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#sni_container_refs LbListenerV3#sni_container_refs}
  */
  readonly sniContainerRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#tags LbListenerV3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
  /**
  * insert_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#insert_headers LbListenerV3#insert_headers}
  */
  readonly insertHeaders?: LbListenerV3InsertHeaders;
}
export interface LbListenerV3InsertHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#forward_elb_ip LbListenerV3#forward_elb_ip}
  */
  readonly forwardElbIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#forwarded_for_port LbListenerV3#forwarded_for_port}
  */
  readonly forwardedForPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#forwarded_host LbListenerV3#forwarded_host}
  */
  readonly forwardedHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html#forwarded_port LbListenerV3#forwarded_port}
  */
  readonly forwardedPort?: boolean | cdktf.IResolvable;
}

function lbListenerV3InsertHeadersToTerraform(struct?: LbListenerV3InsertHeadersOutputReference | LbListenerV3InsertHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_elb_ip: cdktf.booleanToTerraform(struct!.forwardElbIp),
    forwarded_for_port: cdktf.booleanToTerraform(struct!.forwardedForPort),
    forwarded_host: cdktf.booleanToTerraform(struct!.forwardedHost),
    forwarded_port: cdktf.booleanToTerraform(struct!.forwardedPort),
  }
}

export class LbListenerV3InsertHeadersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // forward_elb_ip - computed: true, optional: true, required: false
  private _forwardElbIp?: boolean | cdktf.IResolvable | undefined; 
  public get forwardElbIp() {
    return this.getBooleanAttribute('forward_elb_ip') as any;
  }
  public set forwardElbIp(value: boolean | cdktf.IResolvable | undefined) {
    this._forwardElbIp = value;
  }
  public resetForwardElbIp() {
    this._forwardElbIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardElbIpInput() {
    return this._forwardElbIp
  }

  // forwarded_for_port - computed: true, optional: true, required: false
  private _forwardedForPort?: boolean | cdktf.IResolvable | undefined; 
  public get forwardedForPort() {
    return this.getBooleanAttribute('forwarded_for_port') as any;
  }
  public set forwardedForPort(value: boolean | cdktf.IResolvable | undefined) {
    this._forwardedForPort = value;
  }
  public resetForwardedForPort() {
    this._forwardedForPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForPortInput() {
    return this._forwardedForPort
  }

  // forwarded_host - computed: true, optional: true, required: false
  private _forwardedHost?: boolean | cdktf.IResolvable | undefined; 
  public get forwardedHost() {
    return this.getBooleanAttribute('forwarded_host') as any;
  }
  public set forwardedHost(value: boolean | cdktf.IResolvable | undefined) {
    this._forwardedHost = value;
  }
  public resetForwardedHost() {
    this._forwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedHostInput() {
    return this._forwardedHost
  }

  // forwarded_port - computed: true, optional: true, required: false
  private _forwardedPort?: boolean | cdktf.IResolvable | undefined; 
  public get forwardedPort() {
    return this.getBooleanAttribute('forwarded_port') as any;
  }
  public set forwardedPort(value: boolean | cdktf.IResolvable | undefined) {
    this._forwardedPort = value;
  }
  public resetForwardedPort() {
    this._forwardedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedPortInput() {
    return this._forwardedPort
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html opentelekomcloud_lb_listener_v3}
*/
export class LbListenerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_listener_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3.html opentelekomcloud_lb_listener_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV3Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV3Config) {
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
    this._adminStateUp = config.adminStateUp;
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._clientTimeout = config.clientTimeout;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._http2Enable = config.http2Enable;
    this._keepAliveTimeout = config.keepAliveTimeout;
    this._loadbalancerId = config.loadbalancerId;
    this._memberRetryEnable = config.memberRetryEnable;
    this._memberTimeout = config.memberTimeout;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._sniContainerRefs = config.sniContainerRefs;
    this._tags = config.tags;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
    this._insertHeaders = config.insertHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable | undefined; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up') as any;
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable | undefined) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp
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

  // client_timeout - computed: true, optional: true, required: false
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

  // http2_enable - computed: false, optional: true, required: false
  private _http2Enable?: boolean | cdktf.IResolvable | undefined; 
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable') as any;
  }
  public set http2Enable(value: boolean | cdktf.IResolvable | undefined) {
    this._http2Enable = value;
  }
  public resetHttp2Enable() {
    this._http2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnableInput() {
    return this._http2Enable
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_alive_timeout - computed: true, optional: true, required: false
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

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
  }

  // member_retry_enable - computed: false, optional: true, required: false
  private _memberRetryEnable?: boolean | cdktf.IResolvable | undefined; 
  public get memberRetryEnable() {
    return this.getBooleanAttribute('member_retry_enable') as any;
  }
  public set memberRetryEnable(value: boolean | cdktf.IResolvable | undefined) {
    this._memberRetryEnable = value;
  }
  public resetMemberRetryEnable() {
    this._memberRetryEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRetryEnableInput() {
    return this._memberRetryEnable
  }

  // member_timeout - computed: true, optional: true, required: false
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort
  }

  // sni_container_refs - computed: false, optional: true, required: false
  private _sniContainerRefs?: string[] | undefined; 
  public get sniContainerRefs() {
    return this.getListAttribute('sni_container_refs');
  }
  public set sniContainerRefs(value: string[] | undefined) {
    this._sniContainerRefs = value;
  }
  public resetSniContainerRefs() {
    this._sniContainerRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniContainerRefsInput() {
    return this._sniContainerRefs
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

  // tls_ciphers_policy - computed: true, optional: true, required: false
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

  // insert_headers - computed: false, optional: true, required: false
  private _insertHeaders?: LbListenerV3InsertHeaders | undefined; 
  private __insertHeadersOutput = new LbListenerV3InsertHeadersOutputReference(this as any, "insert_headers", true);
  public get insertHeaders() {
    return this.__insertHeadersOutput;
  }
  public putInsertHeaders(value: LbListenerV3InsertHeaders | undefined) {
    this._insertHeaders = value;
  }
  public resetInsertHeaders() {
    this._insertHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeadersInput() {
    return this._insertHeaders
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      keep_alive_timeout: cdktf.numberToTerraform(this._keepAliveTimeout),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      member_retry_enable: cdktf.booleanToTerraform(this._memberRetryEnable),
      member_timeout: cdktf.numberToTerraform(this._memberTimeout),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      sni_container_refs: cdktf.listMapper(cdktf.stringToTerraform)(this._sniContainerRefs),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
      insert_headers: lbListenerV3InsertHeadersToTerraform(this._insertHeaders),
    };
  }
}
