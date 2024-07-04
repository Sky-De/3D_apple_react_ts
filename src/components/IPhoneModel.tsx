/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: polyman (https://sketchfab.com/Polyman_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7
Title: Apple iPhone 15 Pro Max Black
*/

import { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export type IphoneModelProps = {
  item: {
    title: string;
    color: string[];
    img: string;
  };
  scale: [number, number, number];
  size: unknown;
};

import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ttmRoLdJipiIOmf: THREE.Mesh;
    DjsDkGiopeiEJZK: THREE.Mesh;
    buRWvyqhBBgcJFo: THREE.Mesh;
    MrMmlCAsAxJpYqQ_0: THREE.Mesh;
    wqbHSzWaUxBCwxY_0: THREE.Mesh;
    QvGDcbDApaGssma: THREE.Mesh;
    vFwJFNASGvEHWhs: THREE.Mesh;
    evAxFwhaQUwXuua: THREE.Mesh;
    USxQiqZgxHbRvqB: THREE.Mesh;
    TvgBVmqNmSrFVfW: THREE.Mesh;
    GuYJryuYunhpphO: THREE.Mesh;
    pvdHknDTGDzVpwc: THREE.Mesh;
    CfghdUoyzvwzIum: THREE.Mesh;
    DjdhycfQYjKMDyn: THREE.Mesh;
    usFLmqcyrnltBUr: THREE.Mesh;
    xXDHkMplTIDAXLN: THREE.Mesh;
    vELORlCJixqPHsZ: THREE.Mesh;
    EbQGKrWAqhBHiMv: THREE.Mesh;
    EddVrWkqZTlvmci: THREE.Mesh;
    KSWlaxBcnPDpFCs: THREE.Mesh;
    TakBsdEjEytCAMK: THREE.Mesh;
    IykfmVvLplTsTEW: THREE.Mesh;
    wLfSXtbwRlBrwof: THREE.Mesh;
    WJwwVjsahIXbJpU: THREE.Mesh;
    YfrJNXgMvGOAfzz: THREE.Mesh;
    DCLCbjzqejuvsqH: THREE.Mesh;
    CdalkzDVnwgdEhS: THREE.Mesh;
    NtjcIgolNGgYlCg: THREE.Mesh;
    pXBNoLiaMwsDHRF: THREE.Mesh;
    IkoiNqATMVoZFKD: THREE.Mesh;
    rqgRAGHOwnuBypi: THREE.Mesh;
  };
  materials: {
    hUlRcbieVuIiOXG: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    dxCVrUCvYhjVxqy: THREE.MeshStandardMaterial;
    MHFGNLrDQbTNima: THREE.MeshStandardMaterial;
    kUhjpatHUvkBwfM: THREE.MeshStandardMaterial;
    RJoymvEsaIItifI: THREE.MeshStandardMaterial;
    KSIxMqttXxxmOYl: THREE.MeshStandardMaterial;
    mcPrzcBUcdqUybC: THREE.MeshStandardMaterial;
    pIhYLPqiSQOZTjn: THREE.MeshStandardMaterial;
    eShKpuMNVJTRrgg: THREE.MeshStandardMaterial;
    xdyiJLYTYRfJffH: THREE.MeshStandardMaterial;
    jpGaQNgTtEGkTfo: THREE.MeshStandardMaterial;
    ujsvqBWRMnqdwPx: THREE.MeshStandardMaterial;
    sxNzrmuTqVeaXdg: THREE.MeshStandardMaterial;
    pIJKfZsazmcpEiU: THREE.MeshStandardMaterial;
    zFdeDaGNRwzccye: THREE.MeshStandardMaterial;
    TBLSREBUyLMVtJa: THREE.MeshStandardMaterial;
    xNrofRCqOXXHVZt: THREE.MeshStandardMaterial;
    yQQySPTfbEJufve: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    oZRkkORNzkufnGD: THREE.MeshStandardMaterial;
    yhcAXNGcJWCqtIS: THREE.MeshStandardMaterial;
    bCgzXjHOanGdTFV: THREE.MeshStandardMaterial;
    vhaEJjZoqGtyLdo: THREE.MeshStandardMaterial;
    jlzuBkUzuJqgiAK: THREE.MeshStandardMaterial;
    PpwUTnTFZJXxCoE: THREE.MeshStandardMaterial;
    yiDkEwDSyEhavuP: THREE.MeshStandardMaterial;
    hiVunnLeAHkwGEo: THREE.MeshStandardMaterial;
    HGhEhpqSBZRnjHC: THREE.MeshStandardMaterial;
  };
};

export function IPhoneModel(props: IphoneModelProps) {
  // FIX -- use props.size
  const { nodes, materials } = useGLTF("/models/scene.glb") as GLTFResult;

  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).map((material) => {
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        // console.log(material[1].color);
        material[1].color = new THREE.Color(props.item.color[0]);
      }

      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/scene.glb");
