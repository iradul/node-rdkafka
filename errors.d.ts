// ====== Generated from librdkafka 1.3.0 source ======
export const CODES: { ERRORS: {
  /** Begin internal error codes */
  ERR__BEGIN: number
  /** Received message is incorrect */
  ERR__BAD_MSG: number
  /** Bad/unknown compression */
  ERR__BAD_COMPRESSION: number
  /** Broker is going away */
  ERR__DESTROY: number
  /** Generic failure */
  ERR__FAIL: number
  /** Broker transport failure */
  ERR__TRANSPORT: number
  /** Critical system resource */
  ERR__CRIT_SYS_RESOURCE: number
  /** Failed to resolve broker */
  ERR__RESOLVE: number
  /** Produced message timed out*/
  ERR__MSG_TIMED_OUT: number
  /** Reached the end of the topic+partition queue on
   * the broker. Not really an error. 
   * This event is disabled by default,
   * see the `enable.partition.eof` configuration property. */
  ERR__PARTITION_EOF: number
  /** Permanent: Partition does not exist in cluster. */
  ERR__UNKNOWN_PARTITION: number
  /** File or filesystem error */
  ERR__FS: number
   /** Permanent: Topic does not exist in cluster. */
  ERR__UNKNOWN_TOPIC: number
  /** All broker connections are down. */
  ERR__ALL_BROKERS_DOWN: number
  /** Invalid argument, or invalid configuration */
  ERR__INVALID_ARG: number
  /** Operation timed out */
  ERR__TIMED_OUT: number
  /** Queue is full */
  ERR__QUEUE_FULL: number
  /** ISR count < required.acks */
  ERR__ISR_INSUFF: number
  /** Broker node update */
  ERR__NODE_UPDATE: number
  /** SSL error */
  ERR__SSL: number
  /** Waiting for coordinator to become available. */
  ERR__WAIT_COORD: number
  /** Unknown client group */
  ERR__UNKNOWN_GROUP: number
  /** Operation in progress */
  ERR__IN_PROGRESS: number
   /** Previous operation in progress, wait for it to finish. */
  ERR__PREV_IN_PROGRESS: number
   /** This operation would interfere with an existing subscription */
  ERR__EXISTING_SUBSCRIPTION: number
  /** Assigned partitions (rebalance_cb) */
  ERR__ASSIGN_PARTITIONS: number
  /** Revoked partitions (rebalance_cb) */
  ERR__REVOKE_PARTITIONS: number
  /** Conflicting use */
  ERR__CONFLICT: number
  /** Wrong state */
  ERR__STATE: number
  /** Unknown protocol */
  ERR__UNKNOWN_PROTOCOL: number
  /** Not implemented */
  ERR__NOT_IMPLEMENTED: number
  /** Authentication failure*/
  ERR__AUTHENTICATION: number
  /** No stored offset */
  ERR__NO_OFFSET: number
  /** Outdated */
  ERR__OUTDATED: number
  /** Timed out in queue */
  ERR__TIMED_OUT_QUEUE: number
  /** Feature not supported by broker */
  ERR__UNSUPPORTED_FEATURE: number
  /** Awaiting cache update */
  ERR__WAIT_CACHE: number
  /** Operation interrupted */
  ERR__INTR: number
  /** Key serialization error */
  ERR__KEY_SERIALIZATION: number
  /** Value serialization error */
  ERR__VALUE_SERIALIZATION: number
  /** Key deserialization error */
  ERR__KEY_DESERIALIZATION: number
  /** Value deserialization error */
  ERR__VALUE_DESERIALIZATION: number
  /** Partial response */
  ERR__PARTIAL: number
  /** Modification attempted on read-only object */
  ERR__READ_ONLY: number
  /** No such entry / item not found */
  ERR__NOENT: number
  /** Read underflow */
  ERR__UNDERFLOW: number
  /** Invalid type */
  ERR__INVALID_TYPE: number
  /** Retry operation */
  ERR__RETRY: number
  /** Purged in queue */
  ERR__PURGE_QUEUE: number
  /** Purged in flight */
  ERR__PURGE_INFLIGHT: number
  /** Fatal error: see RdKafka::Handle::fatal_error() */
  ERR__FATAL: number
  /** Inconsistent state */
  ERR__INCONSISTENT: number
  /** Gap-less ordering would not be guaranteed if proceeding */
  ERR__GAPLESS_GUARANTEE: number
  /** Maximum poll interval exceeded */
  ERR__MAX_POLL_EXCEEDED: number
  /** Unknown broker */
  ERR__UNKNOWN_BROKER: number
  /** End internal error codes */
  ERR__END: number
  /* Kafka broker errors: */
  /** Unknown broker error */
  ERR_UNKNOWN: number
  /** Success */
  ERR_NO_ERROR: number
  /** Offset out of range */
  ERR_OFFSET_OUT_OF_RANGE: number
  /** Invalid message */
  ERR_INVALID_MSG: number
  /** Unknown topic or partition */
  ERR_UNKNOWN_TOPIC_OR_PART: number
  /** Invalid message size */
  ERR_INVALID_MSG_SIZE: number
  /** Leader not available */
  ERR_LEADER_NOT_AVAILABLE: number
  /** Not leader for partition */
  ERR_NOT_LEADER_FOR_PARTITION: number
  /** Request timed out */
  ERR_REQUEST_TIMED_OUT: number
  /** Broker not available */
  ERR_BROKER_NOT_AVAILABLE: number
  /** Replica not available */
  ERR_REPLICA_NOT_AVAILABLE: number
  /** Message size too large */
  ERR_MSG_SIZE_TOO_LARGE: number
  /** StaleControllerEpochCode */
  ERR_STALE_CTRL_EPOCH: number
  /** Offset metadata string too large */
  ERR_OFFSET_METADATA_TOO_LARGE: number
  /** Broker disconnected before response received */
  ERR_NETWORK_EXCEPTION: number
  /** Coordinator load in progress */
  ERR_COORDINATOR_LOAD_IN_PROGRESS: number
  /** Group coordinator load in progress */
  ERR_GROUP_LOAD_IN_PROGRESS: number
  /** Coordinator not available */
  ERR_COORDINATOR_NOT_AVAILABLE: number
  /** Group coordinator not available */
  ERR_GROUP_COORDINATOR_NOT_AVAILABLE: number
  /** Not coordinator */
  ERR_NOT_COORDINATOR: number
  /** Not coordinator for group */
  ERR_NOT_COORDINATOR_FOR_GROUP: number
  /** Invalid topic */
  ERR_TOPIC_EXCEPTION: number
  /** Message batch larger than configured server segment size */
  ERR_RECORD_LIST_TOO_LARGE: number
  /** Not enough in-sync replicas */
  ERR_NOT_ENOUGH_REPLICAS: number
  /** Message(s) written to insufficient number of in-sync replicas */
  ERR_NOT_ENOUGH_REPLICAS_AFTER_APPEND: number
  /** Invalid required acks value */
  ERR_INVALID_REQUIRED_ACKS: number
  /** Specified group generation id is not valid */
  ERR_ILLEGAL_GENERATION: number
  /** Inconsistent group protocol */
  ERR_INCONSISTENT_GROUP_PROTOCOL: number
  /** Invalid group.id */
  ERR_INVALID_GROUP_ID: number
  /** Unknown member */
  ERR_UNKNOWN_MEMBER_ID: number
  /** Invalid session timeout */
  ERR_INVALID_SESSION_TIMEOUT: number
  /** Group rebalance in progress */
  ERR_REBALANCE_IN_PROGRESS: number
  /** Commit offset data size is not valid */
  ERR_INVALID_COMMIT_OFFSET_SIZE: number
  /** Topic authorization failed */
  ERR_TOPIC_AUTHORIZATION_FAILED: number
  /** Group authorization failed */
  ERR_GROUP_AUTHORIZATION_FAILED: number
  /** Cluster authorization failed */
  ERR_CLUSTER_AUTHORIZATION_FAILED: number
  /** Invalid timestamp */
  ERR_INVALID_TIMESTAMP: number
  /** Unsupported SASL mechanism */
  ERR_UNSUPPORTED_SASL_MECHANISM: number
  /** Illegal SASL state */
  ERR_ILLEGAL_SASL_STATE: number
  /** Unuspported version */
  ERR_UNSUPPORTED_VERSION: number
  /** Topic already exists */
  ERR_TOPIC_ALREADY_EXISTS: number
  /** Invalid number of partitions */
  ERR_INVALID_PARTITIONS: number
  /** Invalid replication factor */
  ERR_INVALID_REPLICATION_FACTOR: number
  /** Invalid replica assignment */
  ERR_INVALID_REPLICA_ASSIGNMENT: number
  /** Invalid config */
  ERR_INVALID_CONFIG: number
  /** Not controller for cluster */
  ERR_NOT_CONTROLLER: number
  /** Invalid request */
  ERR_INVALID_REQUEST: number
  /** Message format on broker does not support request */
  ERR_UNSUPPORTED_FOR_MESSAGE_FORMAT: number
  /** Policy violation */
  ERR_POLICY_VIOLATION: number
  /** Broker received an out of order sequence number */
  ERR_OUT_OF_ORDER_SEQUENCE_NUMBER: number
  /** Broker received a duplicate sequence number */
  ERR_DUPLICATE_SEQUENCE_NUMBER: number
  /** Producer attempted an operation with an old epoch */
  ERR_INVALID_PRODUCER_EPOCH: number
  /** Producer attempted a transactional operation in an invalid state */
  ERR_INVALID_TXN_STATE: number
  /** Producer attempted to use a producer id which is not
  *  currently assigned to its transactional id */
  ERR_INVALID_PRODUCER_ID_MAPPING: number
  /** Transaction timeout is larger than the maximum
  *  value allowed by the broker's max.transaction.timeout.ms */
  ERR_INVALID_TRANSACTION_TIMEOUT: number
  /** Producer attempted to update a transaction while another
  *  concurrent operation on the same transaction was ongoing */
  ERR_CONCURRENT_TRANSACTIONS: number
  /** Indicates that the transaction coordinator sending a
  *  WriteTxnMarker is no longer the current coordinator for a
  *  given producer */
  ERR_TRANSACTION_COORDINATOR_FENCED: number
  /** Transactional Id authorization failed */
  ERR_TRANSACTIONAL_ID_AUTHORIZATION_FAILED: number
  /** Security features are disabled */
  ERR_SECURITY_DISABLED: number
  /** Operation not attempted */
  ERR_OPERATION_NOT_ATTEMPTED: number
  /** Disk error when trying to access log file on the disk */
  ERR_KAFKA_STORAGE_ERROR: number
  /** The user-specified log directory is not found in the broker config */
  ERR_LOG_DIR_NOT_FOUND: number
  /** SASL Authentication failed */
  ERR_SASL_AUTHENTICATION_FAILED: number
  /** Unknown Producer Id */
  ERR_UNKNOWN_PRODUCER_ID: number
  /** Partition reassignment is in progress */
  ERR_REASSIGNMENT_IN_PROGRESS: number
  /** Delegation Token feature is not enabled */
  ERR_DELEGATION_TOKEN_AUTH_DISABLED: number
  /** Delegation Token is not found on server */
  ERR_DELEGATION_TOKEN_NOT_FOUND: number
  /** Specified Principal is not valid Owner/Renewer */
  ERR_DELEGATION_TOKEN_OWNER_MISMATCH: number
  /** Delegation Token requests are not allowed on this connection */
  ERR_DELEGATION_TOKEN_REQUEST_NOT_ALLOWED: number
  /** Delegation Token authorization failed */
  ERR_DELEGATION_TOKEN_AUTHORIZATION_FAILED: number
  /** Delegation Token is expired */
  ERR_DELEGATION_TOKEN_EXPIRED: number
  /** Supplied principalType is not supported */
  ERR_INVALID_PRINCIPAL_TYPE: number
  /** The group is not empty */
  ERR_NON_EMPTY_GROUP: number
  /** The group id does not exist */
  ERR_GROUP_ID_NOT_FOUND: number
  /** The fetch session ID was not found */
  ERR_FETCH_SESSION_ID_NOT_FOUND: number
  /** The fetch session epoch is invalid */
  ERR_INVALID_FETCH_SESSION_EPOCH: number
  /** No matching listener */
  ERR_LISTENER_NOT_FOUND: number
  /** Topic deletion is disabled */
  ERR_TOPIC_DELETION_DISABLED: number
  /** Leader epoch is older than broker epoch */
  ERR_FENCED_LEADER_EPOCH: number
  /** Leader epoch is newer than broker epoch */
  ERR_UNKNOWN_LEADER_EPOCH: number
  /** Unsupported compression type */
  ERR_UNSUPPORTED_COMPRESSION_TYPE: number
  /** Broker epoch has changed */
  ERR_STALE_BROKER_EPOCH: number
  /** Leader high watermark is not caught up */
  ERR_OFFSET_NOT_AVAILABLE: number
  /** Group member needs a valid member ID */
  ERR_MEMBER_ID_REQUIRED: number
  /** Preferred leader was not available */
  ERR_PREFERRED_LEADER_NOT_AVAILABLE: number
  /** Consumer group has reached maximum size */
  ERR_GROUP_MAX_SIZE_REACHED: number
}}