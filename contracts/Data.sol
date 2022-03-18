// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library Data {
    bytes public constant FONTS =
        hex"81422418182442817EEBDBDFDFDBEB7E7EDBEBEFEFEBDB7E0E1F3F7E3F1F0E00081C3E7F3E1C08001C1C5F7F5F1C1C00181C5E7F5E1C18003C7EFFFFFFFF7E3C3C66C38181C3663C007E7E7E7E7E7E00007E424242427E0070F88888FD770307004E5FF1F15F4E00002070703F02040020703F0525753F00995A24C3C3245A99FFFF7E7E3C3C181818183C3C7E7EFFFF000000005555555555555555000000007EFFDBE7E7DBFF7E3EFFE7DBDBE7FF7E7EFFC3DBDBC3FF7E7ECFD7DBDBD7CF7E0804027F020408000810207F20100800080808492A1C0800081C2A4908080800CCCC3333CCCC3333081C3663361C0800C0F0FCFFFFFCF0C0030F3FFFFF3F0F0300000000000000000000005F5F0000000000070300070300147F7F147F7F1400042E2A7F2A3A1000006636180C666200307A4F5D377A4800000000070300000000001C3E63410000000041633E1C0000082A3E1C1C3E2A080010107C7C101000000080E06000000000001010101000000000004040000000006030180C060300003E7F49457F3E000000027F7F00000000727B49496F660000226349497F3600181C16137F7F1000002F6F49497B3300003E7F49497B320000030371790F070000367F49497F360000266F49497F3E000000002828000000000080E868000000000010386C44000000282828282800000000446C3810000000020351590F06003E7F415D555F0E00007C7E13137E7C00007F7F49497F3600003E7F4141632200007F7F41417F3E00007F7F4949414100007F7F0909010100003E7F41497B3A00007F7F08087F7F000000417F7F41000000206040417F3F00007F7F081C776300007F7F40404040007F7F060C067F7F00007F7F060C7F7F00003E7F41417F3E00007F7F09090F0600003E7F4161FFBE00007F7F09097F760000266F49497B32000001017F7F010100003F7F40407F3F00001F3F60603F1F003F7F6038607F3F000063771C1C77630000070F78780F0700006171594D47430000007F7F414100000003060C18306000000041417F7F000000040603030604004040404040404040000003070400000000207454547C7800007F7F44447C380000387C44446C280000387C44447F7F0000387C54545C1800087E7F09090302000018BCA4A4FC7C00007F7F04047C78000000003D7D400000008084FD7D000000007F7F10386C44000000003F7F4000007C7C0C780C7C7800007C7C04047C780000387C44447C380000FCFC24243C180000183C2424FCFC00007C7C04040C080000085C545474200000043F7F44440000003C7C40407C7C00001C3C60603C1C003C7C4030407C3C0000446C38386C4400001CBCA0A0FC7C00004464745C4C44000000083E77410000000000E7E7000000000041773E080000002030103020300000486C246C486C0000004400001100004411441144114411AA55AA55AA55AA550F000F000F000F0080402010080402010102040810204080000000FFFF000000181818F8F8181818181818FFFF000000000000F8F8181818181818F8F8000000000000E0F0381818181838F0E0000000181818FFFF181818C0E070381C0E070303070E1C3870E0C0A050A050A050A050AA55AA550000000000542A542A542A00FF00FF00FF00FF0080C0E0F0F8FCFEFFFFFEFCF8F0E0C0801818181818181818000000FFFF1818181818181F1F1818180000001F1F1818181818181F1F000000000000070F1C181818181C0F07000000000000555500000066CC993366CC99333399CC663399CC6600000000AA55AA550A050A050A050A055555555555555555F000F000F000F00000000000F0F0F0F0F0F0F0F0000000008080808080808080E0E0E0E0E0E0E0E0F0F0F0F0F0F0F0F0F8F8F8F8F8F8F8F8FEFEFEFEFEFEFEFE0000001818181818000000F8F80000001800180018001800000080E0F0F8F8FCFCF8F8F0E0800000AA55AA550A050A050A050A05AA55AA5500000000A050A050A050A05000000000000000000F0F0F0F0F0F0F0F00000000FF00000000000000FFFFFF0000000000FFFFFFFF00000000FFFFFFFFFF000000FFFFFFFFFFFFFF000000001F1F00000018181818180000000004FEBFF7FE0400000001070F1F1F3F3F1F1F0F07010000AA55AA55A050A050A050A050AA55AA55000000000A050A050A050A0500000000F0F0F0F00F0F0F0F7F492A1C08080000141C080808080800804024181A200800B060D0A81C0C000000422400002442000000240000240000000000181800000028028001800140142046894004926408082A147F142A0800410008140800410000003A7E7E3A0000000060F8F5620500A050A0500A050A050A050A05A050A050888848284884828408894488A222112220343EFFFF3E3420003C7E7E7E7E3C001C3E3E3C383C180078FCFEF6F6ECF860C0F8E4F2F3EEF0E00E1F3F4221110E000E11214221110E00FFFF0303030303030303030303030303030303030303FFFF187CD66BD7C36E3CF0607CCFCF7C60F0000E1B743A0C3F0CE870D87C7CD870E8F870F078F77CF7180CF37070FF76FF16F038F838FE3FFF028A8A22A28AA8A82AC864381C060E78D004643C1F3C64040088482B1F2B4888000408EB1FEB0804001008EB1F2B488400FFFF000000000000FFFFC3C3C3C3FFFF000000000000FFFF1C3E7F77773614001C3E7F77632200007C327B3F733A7C007C3A6B2F6B3A7C000818363C76381808000F1A0F1A0F000080C07EFF7EC08000060647EFBF170606006198C4E68A700000306A66666A30003050909F999650F0FCFE83FFFF83FEFC1824241808180800FFFFC0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0FFFF";

    bytes public constant COLORS =
        hex"0000001D2B537E2553008751AB52365F574FC2C3C7FFF1E8FF004DFFA300FFEC2700E43629ADFF83769CFF77A8FFCCAA";

    function getFontAt(uint256 index) internal pure returns (uint64) {
        uint128 b = 0;
        for (uint8 i = 0; i < 8; i++) {
            b += uint128(uint8(FONTS[index * 8 + i])) << (i * 8);
        }
        return uint64(b);
    }

    function getColorAt(uint256 index)
        internal
        pure
        returns (
            uint8,
            uint8,
            uint8
        )
    {
        return (
            uint8(COLORS[index * 3]),
            uint8(COLORS[index * 3 + 1]),
            uint8(COLORS[index * 3 + 2])
        );
    }
}
