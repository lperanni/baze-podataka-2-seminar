/*FIRST EXAMPLE*/
/*RELATION*/
INSERT into relations('R')
values ('ABCDEFGHIJKLMNOPRS');
/*KEYS*/
INSERT INTO keys('relation_id', 'K')
values (1, 'ARS');
INSERT INTO keys('relation_id', 'K')
values (1, 'CRS');
INSERT INTO keys('relation_id', 'K')
values (1, 'KRS');
/*DEPENDENCIES*/
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'A->BCDE');
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'C->AEFGHIJK');
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'K->LMNAOP');
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'EF->AOKC');
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'P->AB');
INSERT INTO fmin('relation_id', 'dependency')
values (1, 'DE->PC');
/*SECOND EXAMPLE*/
/*RELATION*/
INSERT into relations('R')
values ('ABCDEFGHIJKLM');
/*KEYS*/
INSERT INTO keys('relation_id', 'K')
values (2, 'BMGFI');
INSERT INTO keys('relation_id', 'K')
values (2, 'BMGCE');
/*DEPENDENCIES*/
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'BM->JKLADE');
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'MD->FKLJ');
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'K->LMNAOP');
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'G->BCDEF');
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'FI->HIJK');
INSERT INTO fmin('relation_id', 'dependency')
values (2, 'CE->BMDIF');
/*THIRD EXAMPLE*/
/*RELATION*/
INSERT into relations('R')
values ('ABCDEFGHIJKLMNO');
/*KEYS*/
INSERT INTO keys('relation_id', 'K')
values (3, 'EOL');
/*DEPENDENCIES*/
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'AB->EF');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'CD->FGEH');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'EO->AHIJK');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'L->MN');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'N->ABCDEF');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'KM->GHIAC');
INSERT INTO fmin('relation_id', 'dependency')
values (3, 'F->MNO');
/*FOURTH EXAMPLE*/
/*RELATION*/
INSERT into relations('R')
values ('ABCDEFGHIJKLMNOP');
/*KEYS*/
INSERT INTO keys('relation_id', 'K')
values (4, 'CDME');
/*DEPENDENCIES*/
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'A->A');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'A->B');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'B->A');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'B->B');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'CD->ABCDEFGHIJKL');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'ME->NOP');
INSERT INTO fmin('relation_id', 'dependency')
values (4, 'D->M');
/*FIFTH EXAMPLE*/
/*RELATION*/
INSERT into relations('R')
values ('ABCDEFGHIJKL');
/*KEYS*/
INSERT INTO keys('relation_id', 'K')
values (5, 'DFG');
/*DEPENDENCIES*/
INSERT INTO fmin('relation_id', 'dependency')
values (5, 'A->BCE');
INSERT INTO fmin('relation_id', 'dependency')
values (5, 'C->EH');
INSERT INTO fmin('relation_id', 'dependency')
values (5, 'DFG->IJKL');
INSERT INTO fmin('relation_id', 'dependency')
values (5, 'L->AB');
INSERT INTO fmin('relation_id', 'dependency')
values (5, 'B->DEL');