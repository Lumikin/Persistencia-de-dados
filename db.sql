create database teste_escola;
use teste_escola;
create table if not exists alunos( id_aluno int auto_increment primary key, nome varchar(100) not null, matricula varchar(15) not null);
insert into alunos (nome, matricula) values 
('Lucas', 'MA010');
insert into alunos (nome, matricula) values 
('Raisa', 'MA148');
insert into alunos (nome, matricula) values 
('Samuel', 'MA789');
insert into alunos (nome, matricula) values 
('Ana', 'MA768');
select * from  alunos