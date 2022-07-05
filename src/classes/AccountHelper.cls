/**
 * Created by i2max-ShinPark on 2022-07-05.
 */

public with sharing class AccountHelper {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Rating,
                Phone, Website, AnnualRevenue
        FROM Account];
    }
}