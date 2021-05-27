//Code generated by solts. DO NOT EDIT.
import { Address, CancelStreamSignal, ContractCodec, Event, Keccak } from '../../index';
interface Provider {
  deploy(
    data: string | Uint8Array,
    contractMeta?: {
      abi: string;
      codeHash: Uint8Array;
    }[],
  ): Promise<Address>;
  call(data: string | Uint8Array, address: string): Promise<Uint8Array | undefined>;
  callSim(data: string | Uint8Array, address: string): Promise<Uint8Array | undefined>;
  listen(
    signatures: string[],
    address: string,
    callback: (err?: Error, event?: Event) => CancelStreamSignal | void,
    start?: 'first' | 'latest' | 'stream' | number,
    end?: 'first' | 'latest' | 'stream' | number,
  ): unknown;
  contractCodec(contractABI: string): ContractCodec;
}
export type Caller = typeof defaultCall;
export async function defaultCall<Output>(
  client: Provider,
  addr: string,
  data: Uint8Array,
  isSim: boolean,
  callback: (returnData: Uint8Array | undefined) => Output,
): Promise<Output> {
  const returnData = await (isSim ? client.callSim(data, addr) : client.call(data, addr));
  return callback(returnData);
}
export namespace Creator {
  export const contactName = 'Creator';
  export const abi =
    '[{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"create","outputs":[{"internalType":"address","name":"proxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
  export const bytecode =
    '608060405234801561001057600080fd5b50610504806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b6a46b3b14610030575b600080fd5b6100a76004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b90919293919293905050506100e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600082826040516100f990610153565b80806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509350505050604051809103906000f08015801561014a573d6000803e3d6000fd5b50905092915050565b61036f806101618339019056fe60806040526040518060200160405280600081525060009080519060200190610029929190610131565b5034801561003657600080fd5b5060405161036f38038061036f8339818101604052602081101561005957600080fd5b810190808051604051939291908464010000000082111561007957600080fd5b8382019150602082018581111561008f57600080fd5b82518660018202830111640100000000821117156100ac57600080fd5b8083526020830192505050908051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b50604052505050806000908051906020019061012a929190610131565b50506101d6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a0565b828001600101855582156101a0579182015b8281111561019f578251825591602001919060010190610184565b5b5090506101ad91906101b1565b5090565b6101d391905b808211156101cf5760008160009055506001016101b7565b5090565b90565b61018a806101e56000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea265627a7a723158206774e6bd107164a63f42ab8950431a6d5e09eed4da0c066049dc9db7278bbeb364736f6c63430005110032a265627a7a72315820cf64c1da8de972eb1f9f2b5e6799c7af3385d3ee9b08b51fb8d7b060fa7eb4e864736f6c63430005110032';
  export const deployedBytecode =
    '608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b6a46b3b14610030575b600080fd5b6100a76004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b90919293919293905050506100e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600082826040516100f990610153565b80806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509350505050604051809103906000f08015801561014a573d6000803e3d6000fd5b50905092915050565b61036f806101618339019056fe60806040526040518060200160405280600081525060009080519060200190610029929190610131565b5034801561003657600080fd5b5060405161036f38038061036f8339818101604052602081101561005957600080fd5b810190808051604051939291908464010000000082111561007957600080fd5b8382019150602082018581111561008f57600080fd5b82518660018202830111640100000000821117156100ac57600080fd5b8083526020830192505050908051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b50604052505050806000908051906020019061012a929190610131565b50506101d6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a0565b828001600101855582156101a0579182015b8281111561019f578251825591602001919060010190610184565b5b5090506101ad91906101b1565b5090565b6101d391905b808211156101cf5760008160009055506001016101b7565b5090565b90565b61018a806101e56000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea265627a7a723158206774e6bd107164a63f42ab8950431a6d5e09eed4da0c066049dc9db7278bbeb364736f6c63430005110032a265627a7a72315820cf64c1da8de972eb1f9f2b5e6799c7af3385d3ee9b08b51fb8d7b060fa7eb4e864736f6c63430005110032';
  export function deploy(client: Provider, withContractMeta = false): Promise<string> {
    const codec = client.contractCodec(abi);
    const data = Buffer.concat([Buffer.from(bytecode, 'hex'), codec.encodeDeploy()]);
    return client.deploy(
      data,
      withContractMeta
        ? [
            { abi: Creator.abi, codeHash: new Keccak(256).update(Creator.deployedBytecode, 'hex').digest('binary') },
            { abi: Proxy.abi, codeHash: new Keccak(256).update(Proxy.deployedBytecode, 'hex').digest('binary') },
          ]
        : undefined,
    );
  }
  export async function deployContract(client: Provider, withContractMeta = false): Promise<Contract> {
    const address = await deploy(client, withContractMeta);
    return contract(client, address);
  }
  export type Contract = ReturnType<typeof contract>;
  export const contract = (client: Provider, address: string) =>
    ({
      address,
      functions: {
        create(
          _name: string,
          call = defaultCall,
        ): Promise<{
          proxy: string;
        }> {
          const data = encode(client).create(_name);
          return call<{
            proxy: string;
          }>(client, address, data, false, (data: Uint8Array | undefined) => {
            return decode(client, data).create();
          });
        },
      } as const,
    } as const);
  export const encode = (client: Provider) => {
    const codec = client.contractCodec(abi);
    return {
      create: (_name: string) => {
        return codec.encodeFunctionData('B6A46B3B', _name);
      },
    };
  };
  export const decode = (client: Provider, data: Uint8Array | undefined, topics: Uint8Array[] = []) => {
    const codec = client.contractCodec(abi);
    return {
      create: (): {
        proxy: string;
      } => {
        const [proxy] = codec.decodeFunctionResult('B6A46B3B', data);
        return { proxy: proxy };
      },
    };
  };
}
export namespace Proxy {
  export const contactName = 'Proxy';
  export const abi =
    '[{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"get","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]';
  export const bytecode =
    '60806040526040518060200160405280600081525060009080519060200190610029929190610131565b5034801561003657600080fd5b5060405161036f38038061036f8339818101604052602081101561005957600080fd5b810190808051604051939291908464010000000082111561007957600080fd5b8382019150602082018581111561008f57600080fd5b82518660018202830111640100000000821117156100ac57600080fd5b8083526020830192505050908051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b50604052505050806000908051906020019061012a929190610131565b50506101d6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a0565b828001600101855582156101a0579182015b8281111561019f578251825591602001919060010190610184565b5b5090506101ad91906101b1565b5090565b6101d391905b808211156101cf5760008160009055506001016101b7565b5090565b90565b61018a806101e56000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea265627a7a723158206774e6bd107164a63f42ab8950431a6d5e09eed4da0c066049dc9db7278bbeb364736f6c63430005110032';
  export const deployedBytecode =
    '608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b6100386100b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561007857808201518184015260208101905061005d565b50505050905090810190601f1680156100a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561014b5780601f106101205761010080835404028352916020019161014b565b820191906000526020600020905b81548152906001019060200180831161012e57829003601f168201915b505050505090509056fea265627a7a723158206774e6bd107164a63f42ab8950431a6d5e09eed4da0c066049dc9db7278bbeb364736f6c63430005110032';
  export function deploy(client: Provider, _name: string, withContractMeta = false): Promise<string> {
    const codec = client.contractCodec(abi);
    const data = Buffer.concat([Buffer.from(bytecode, 'hex'), codec.encodeDeploy(_name)]);
    return client.deploy(
      data,
      withContractMeta
        ? [
            { abi: Creator.abi, codeHash: new Keccak(256).update(Creator.deployedBytecode, 'hex').digest('binary') },
            { abi: Proxy.abi, codeHash: new Keccak(256).update(Proxy.deployedBytecode, 'hex').digest('binary') },
          ]
        : undefined,
    );
  }
  export async function deployContract(client: Provider, _name: string, withContractMeta = false): Promise<Contract> {
    const address = await deploy(client, _name, withContractMeta);
    return contract(client, address);
  }
  export type Contract = ReturnType<typeof contract>;
  export const contract = (client: Provider, address: string) =>
    ({
      address,
      functions: {
        get(call = defaultCall): Promise<[string]> {
          const data = encode(client).get();
          return call<[string]>(client, address, data, true, (data: Uint8Array | undefined) => {
            return decode(client, data).get();
          });
        },
      } as const,
    } as const);
  export const encode = (client: Provider) => {
    const codec = client.contractCodec(abi);
    return {
      get: () => {
        return codec.encodeFunctionData('6D4CE63C');
      },
    };
  };
  export const decode = (client: Provider, data: Uint8Array | undefined, topics: Uint8Array[] = []) => {
    const codec = client.contractCodec(abi);
    return {
      get: (): [string] => {
        return codec.decodeFunctionResult('6D4CE63C', data);
      },
    };
  };
}
